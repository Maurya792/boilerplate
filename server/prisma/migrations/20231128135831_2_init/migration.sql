/*
  Warnings:

  - You are about to drop the column `trace_date` on the `log` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `log` table. All the data in the column will be lost.
  - You are about to alter the column `user_id` on the `trace` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - A unique constraint covering the columns `[user_organization_id,date]` on the table `trace` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,user_organization_id,date]` on the table `trace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `organization_id` to the `trace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_organization_id` to the `trace` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `log_trace_id_foreign` ON `log`;

-- DropIndex
DROP INDEX `log_trace_id_key` ON `log`;

-- DropIndex
DROP INDEX `log_user_id_trace_date_key` ON `log`;

-- DropIndex
DROP INDEX `trace_id_user_id_date_key` ON `trace`;

-- DropIndex
DROP INDEX `trace_user_id_date_key` ON `trace`;

-- AlterTable
ALTER TABLE `log` DROP COLUMN `trace_date`,
    DROP COLUMN `user_id`;

-- AlterTable
ALTER TABLE `trace` ADD COLUMN `organization_id` INTEGER NOT NULL,
    ADD COLUMN `user_organization_id` INTEGER NOT NULL,
    MODIFY `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `status` ENUM('active', 'initiated') NOT NULL DEFAULT 'initiated',
    MODIFY `role` ENUM('admin', 'user', 'owner') NOT NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE `organization` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `organization_slug_key`(`slug`),
    UNIQUE INDEX `organization_id_slug_key`(`id`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_organization` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` ENUM('admin', 'user', 'owner') NOT NULL DEFAULT 'user',
    `user_id` INTEGER NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `organization_id` INTEGER NOT NULL,

    UNIQUE INDEX `user_organization_user_id_organization_id_key`(`user_id`, `organization_id`),
    UNIQUE INDEX `user_organization_user_id_organization_id_role_key`(`user_id`, `organization_id`, `role`),
    UNIQUE INDEX `user_organization_id_user_id_organization_id_key`(`id`, `user_id`, `organization_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `trace_user_organization_id_date_key` ON `trace`(`user_organization_id`, `date`);

-- CreateIndex
CREATE UNIQUE INDEX `trace_id_user_organization_id_date_key` ON `trace`(`id`, `user_organization_id`, `date`);

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
