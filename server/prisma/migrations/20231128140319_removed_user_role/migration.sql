/*
  Warnings:

  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `trace_user_organization_id_user_id_organization_id_fkey` ON `trace`;

-- DropIndex
DROP INDEX `user_organization_organization_id_slug_fkey` ON `user_organization`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `role`;

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
