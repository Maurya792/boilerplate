-- DropIndex
DROP INDEX `trace_user_organization_id_user_id_organization_id_fkey` ON `trace`;

-- DropIndex
DROP INDEX `user_organization_organization_id_slug_fkey` ON `user_organization`;

-- CreateTable
CREATE TABLE `team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `organization_id` INTEGER NOT NULL,

    UNIQUE INDEX `team_name_organization_id_key`(`name`, `organization_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_organization_team` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `team_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `role` ENUM('manager', 'member') NOT NULL DEFAULT 'member',

    UNIQUE INDEX `user_organization_team_team_id_key`(`team_id`),
    UNIQUE INDEX `user_organization_team_team_id_user_id_key`(`team_id`, `user_id`),
    UNIQUE INDEX `user_organization_team_team_id_user_id_role_key`(`team_id`, `user_id`, `role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `asset` ADD CONSTRAINT `asset_trace_id_foreign` FOREIGN KEY (`trace_id`) REFERENCES `trace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log` ADD CONSTRAINT `log_trace_id_foreign` FOREIGN KEY (`trace_id`) REFERENCES `trace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `part` ADD CONSTRAINT `part_trace_id_foreign` FOREIGN KEY (`trace_id`) REFERENCES `trace`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trace` ADD CONSTRAINT `trace_user_organization_id_user_id_organization_id_fkey` FOREIGN KEY (`user_organization_id`, `user_id`, `organization_id`) REFERENCES `user_organization`(`id`, `user_id`, `organization_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_organization` ADD CONSTRAINT `user_organization_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_organization` ADD CONSTRAINT `user_organization_organization_id_slug_fkey` FOREIGN KEY (`organization_id`, `slug`) REFERENCES `organization`(`id`, `slug`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team` ADD CONSTRAINT `team_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organization`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_organization_team` ADD CONSTRAINT `user_organization_team_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_organization_team` ADD CONSTRAINT `user_organization_team_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
