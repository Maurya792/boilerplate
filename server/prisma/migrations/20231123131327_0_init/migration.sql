-- CreateTable
CREATE TABLE `asset` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `url` TEXT NULL,
    `date` DATETIME(0) NOT NULL,
    `trace_id` INTEGER UNSIGNED NOT NULL,

    INDEX `asset_trace_id_index`(`trace_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `start_time` DATETIME(0) NOT NULL,
    `end_time` DATETIME(0) NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `trace_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `trace_date` DATETIME(3) NOT NULL,

    INDEX `log_trace_id_index`(`trace_id`),
    UNIQUE INDEX `log_trace_id_key`(`trace_id`),
    UNIQUE INDEX `log_user_id_trace_date_key`(`user_id`, `trace_date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `part` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `active_time` DECIMAL(10, 0) NOT NULL,
    `in_active_time` DECIMAL(10, 0) NOT NULL,
    `trace_id` INTEGER UNSIGNED NOT NULL,

    INDEX `part_trace_id_index`(`trace_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trace` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `active_time` DECIMAL(10, 0) NOT NULL,
    `in_active_time` DECIMAL(10, 0) NOT NULL,
    `all_time` DECIMAL(10, 0) NOT NULL,
    `date` DATETIME(0) NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,

    INDEX `trace_user_id_index`(`user_id`),
    UNIQUE INDEX `trace_user_id_date_key`(`user_id`, `date`),
    UNIQUE INDEX `trace_id_user_id_date_key`(`id`, `user_id`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `name` TEXT NULL,
    `password` TEXT NOT NULL,
    `role` ENUM('admin', 'user') NOT NULL DEFAULT 'user',

    UNIQUE INDEX `user_username_unique`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `asset` ADD CONSTRAINT `asset_trace_id_foreign` FOREIGN KEY (`trace_id`) REFERENCES `trace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log` ADD CONSTRAINT `log_trace_id_foreign` FOREIGN KEY (`trace_id`, `user_id`, `trace_date`) REFERENCES `trace`(`id`, `user_id`, `date`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `part` ADD CONSTRAINT `part_trace_id_foreign` FOREIGN KEY (`trace_id`) REFERENCES `trace`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trace` ADD CONSTRAINT `trace_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
