import { Migration } from '@mikro-orm/migrations';

export class Migration20231122145654 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `organization` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `name` varchar(255) not null, `slug` text not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `organization_members` (`organization_id` int unsigned not null, `user_id` int unsigned not null, primary key (`organization_id`, `user_id`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `organization_members` add index `organization_members_organization_id_index`(`organization_id`);');
    this.addSql('alter table `organization_members` add index `organization_members_user_id_index`(`user_id`);');

    this.addSql('create table `organization_admins` (`organization_id` int unsigned not null, `user_id` int unsigned not null, primary key (`organization_id`, `user_id`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `organization_admins` add index `organization_admins_organization_id_index`(`organization_id`);');
    this.addSql('alter table `organization_admins` add index `organization_admins_user_id_index`(`user_id`);');

    this.addSql('alter table `organization_members` add constraint `organization_members_organization_id_foreign` foreign key (`organization_id`) references `organization` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `organization_members` add constraint `organization_members_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `organization_admins` add constraint `organization_admins_organization_id_foreign` foreign key (`organization_id`) references `organization` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `organization_admins` add constraint `organization_admins_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `organization_members` drop foreign key `organization_members_organization_id_foreign`;');

    this.addSql('alter table `organization_admins` drop foreign key `organization_admins_organization_id_foreign`;');

    this.addSql('drop table if exists `organization`;');

    this.addSql('drop table if exists `organization_members`;');

    this.addSql('drop table if exists `organization_admins`;');
  }

}
