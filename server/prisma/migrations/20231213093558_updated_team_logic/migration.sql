/*
  Warnings:

  - You are about to drop the column `user_id` on the `user_organization_team` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[team_id,user_organization_id]` on the table `user_organization_team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[team_id,user_organization_id,role]` on the table `user_organization_team` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `team_organization_id_fkey` ON `team`;

-- DropIndex
DROP INDEX `trace_user_organization_id_user_id_organization_id_fkey` ON `trace`;

-- DropIndex
DROP INDEX `user_organization_organization_id_slug_fkey` ON `user_organization`;

-- DropIndex
DROP INDEX `user_organization_team_team_id_key` ON `user_organization_team`;

-- DropIndex
DROP INDEX `user_organization_team_team_id_user_id_key` ON `user_organization_team`;

-- DropIndex
DROP INDEX `user_organization_team_team_id_user_id_role_key` ON `user_organization_team`;

-- DropIndex
DROP INDEX `user_organization_team_user_id_fkey` ON `user_organization_team`;

-- AlterTable
ALTER TABLE `user_organization_team` DROP COLUMN `user_id`,
    ADD COLUMN `user_organization_id` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_organization_team_team_id_user_organization_id_key` ON `user_organization_team`(`team_id`, `user_organization_id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_organization_team_team_id_user_organization_id_role_key` ON `user_organization_team`(`team_id`, `user_organization_id`, `role`);

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
ALTER TABLE `user_organization_team` ADD CONSTRAINT `user_organization_team_user_organization_id_fkey` FOREIGN KEY (`user_organization_id`) REFERENCES `user_organization`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
