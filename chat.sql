
-- USUARIOS EXTERNOS
CREATE TABLE `client` (
	`id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL DEFAULT 'cliente',
	`assunto` VARCHAR(255) NOT NULL,
 	PRIMARY KEY (`id`),
 		INDEX `name` (`name`)
)
ENGINE = InnoDB DEFAULT CHARSET=utf8;

-- USUARIOS INTERNOS
CREATE TABLE `user` (
	`id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL DEFAULT '',
	`login` VARCHAR(50) NOT NULL,
	`password` VARCHAR(50) NOT NULL,
	`online` ENUM('no','yes') NOT NULL DEFAULT 'no',
 	PRIMARY KEY (`id`),
 		INDEX `name` (`name`)
)
ENGINE = InnoDB DEFAULT CHARSET=utf8;

-- Password is just a sha1 to 'adminadmin'
INSERT INTO `user` VALUES(1, 'Internal user', 'admin', 'adminadmin', 'yes');

-- TICKETS
CREATE TABLE `ticket` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_client` INTEGER UNSIGNED NOT NULL,
  `ticket` INTEGER ZEROFILL NOT NULL,
  `answered` ENUM('no','yes') NOT NULL DEFAULT 'no',
 PRIMARY KEY (`id`),
 	INDEX `id_client` (`id_client`),
 FOREIGN KEY (`id_client`) REFERENCES client(`id`) ON UPDATE CASCADE ON DELETE RESTRICT
)
ENGINE = InnoDB DEFAULT CHARSET=utf8;

-- MESSAGES
CREATE TABLE `messages` (
	`id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	`id_user` INTEGER UNSIGNED NOT NULL,
	`id_client` INTEGER UNSIGNED NOT NULL,
	`id_ticket` INTEGER UNSIGNED NOT NULL,
	`message` TEXT NOT NULL,
	`sent` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
	PRIMARY KEY (`id`),
		INDEX `id_user` (`id_user`),
		INDEX `id_client` (`id_client`),
		INDEX `id_ticket` (`id_ticket`),
 	FOREIGN KEY (`id_user`) REFERENCES user(`id`) ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (`id_client`) REFERENCES client(`id`) ON UPDATE CASCADE ON DELETE NO ACTION,
	FOREIGN KEY (`id_ticket`) REFERENCES ticket(`id`) ON UPDATE CASCADE ON DELETE RESTRICT
)
ENGINE = InnoDB DEFAULT CHARSET=utf8;

