-- MySQL dump 10.13  Distrib 8.1.0, for macos13.3 (arm64)
--
-- Host: 127.0.0.1    Database: qridwan_xnote
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attachments`
--

DROP TABLE IF EXISTS `attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attachments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `note_id` int NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `file_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `note_id` (`note_id`),
  CONSTRAINT `attachments_ibfk_1` FOREIGN KEY (`note_id`) REFERENCES `notes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attachments`
--

/*!40000 ALTER TABLE `attachments` DISABLE KEYS */;
INSERT INTO `attachments` VALUES (1,1,'test','folder/test','png');
/*!40000 ALTER TABLE `attachments` ENABLE KEYS */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'dbms',2,NULL),(3,'Programming',23,'2023-11-08 02:31:33'),(4,'C++',23,'2023-11-08 02:32:02');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `category_delete_trigger` AFTER DELETE ON `categories` FOR EACH ROW BEGIN
  
  UPDATE notes
  SET category_id = NULL
  WHERE category_id = OLD.id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `notebooks`
--

DROP TABLE IF EXISTS `notebooks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notebooks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `notebooks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notebooks`
--

/*!40000 ALTER TABLE `notebooks` DISABLE KEYS */;
INSERT INTO `notebooks` VALUES (3,'Personal',23,'2023-11-08 02:54:12',NULL),(5,'Apple',25,'2023-11-11 00:22:17','🪤'),(6,'Profit',25,'2023-11-11 00:29:05','💸'),(7,'Cat',25,'2023-11-11 00:34:24','🐈'),(8,'Temp',25,'2023-11-11 00:36:42','🤢'),(9,'Cold',25,'2023-11-11 00:37:06','🥶'),(10,'Work',24,'2023-11-11 01:24:20','🏢'),(11,'TempBox',24,'2023-11-11 01:25:30','🦧'),(12,'pgdict',25,'2023-11-11 15:06:43','🧑‍🎓'),(13,'PGD',27,'2023-11-11 16:31:02','🦴'),(14,'Finance',27,'2023-11-11 16:37:28','💵'),(15,'Finance',25,'2023-11-11 16:46:10','😀');
/*!40000 ALTER TABLE `notebooks` ENABLE KEYS */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `notebook_delete_trigger` AFTER DELETE ON `notebooks` FOR EACH ROW BEGIN

UPDATE notes
SET notebook_id = NULL
WHERE notebook_id = OLD.id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Update Time',
  `title` varchar(155) DEFAULT NULL,
  `content` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `notebook_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `notebook_id` (`notebook_id`),
  CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `notes_ibfk_2` FOREIGN KEY (`notebook_id`) REFERENCES `notebooks` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,'2023-09-20 00:52:17','2023-11-08 05:01:54','test note','this is content ',2,3,3,'#fff'),(2,'2023-11-07 22:41:50','2023-11-08 05:02:02','test title','this is content',23,NULL,3,'#000'),(7,'2023-11-08 04:31:29','2023-11-08 05:02:12','hello adsf','test ojk',23,3,NULL,'#EDEDED'),(12,'2023-11-09 01:35:46','2023-11-09 01:35:46','ADD NEW NOTE','pork swine andouille.  Tri-tip cow picanha jerky buffalo shank porchetta frankfurter biltong salami turkey hamburger.  Venison pork biltong tongue bresaola pancetta corned beef swine pork chop filet mignon chicken fatback andouille pastrami buffalo.\n\nBuffalo shankle spare ribs, ham capicola biltong short loin fatback filet mignon pig pork belly tail cow.  Biltong flank pig ball tip brisket kielbasa picanha drumstick salami hamburger short loin kevin.  Shankle ground round jowl, swine picanha buffalo short loin alcatra short ribs venison kielbasa landjaeger meatloaf chislic.  Landjaeger tenderloin pork cow ham hock porchetta chicken rump picanha venison ground round drumstick.  Short loin venison chislic meatloaf beef ribs, tri-tip ball tip kevin boudin bresaola turkey rump',24,NULL,NULL,NULL),(13,'2023-11-09 01:38:25','2023-11-09 01:38:25',' NEW NOTE 2/3','pork swine andouille.  Tri-tip cow picanha jerky buffalo shank porchetta frankfurter biltong salami turkey hamburger.  Venison pork biltong tongue bresaola pancetta corned beef swine pork chop filet mignon chicken fatback andouille pastrami buffalo.\n\nBuffalo shankle spare ribs, ham capicola biltong short loin fatback filet mignon pig pork belly tail cow.  Biltong flank pig ball tip brisket kielbasa picanha drumstick salami hamburger short loin kevin.  Shankle ground round jowl, swine picanha buffalo short loin alcatra short ribs venison kielbasa landjaeger meatloaf chislic.  Landjaeger tenderloin pork cow ham hock porchetta chicken rump picanha venison ground round drumstick.  Short loin venison chislic meatloaf beef ribs, tri-tip ball tip kevin boudin bresaola turkey rump',24,NULL,NULL,'#ffa3f8'),(14,'2023-11-09 01:39:19','2023-11-09 01:39:19','Hello world','Buffalo shankle spare ribs, ham capicola biltong short loin fatback filet mignon pig pork belly tail cow.  Biltong flank pig ball tip brisket kielbasa picanha drumstick salami hamburger short loin kevin.  Shankle ground round jowl, swine picanha buffalo short loin alcatra short ribs venison kielbasa landjaeger meatloaf chislic.  Landjaeger tenderloin pork cow ham hock porchetta chicken rump picanha venison ground round drumstick.  Short loin venison chislic meatloaf beef ribs, tri-tip ball tip kevin boudin bresaola turkey rump',24,NULL,NULL,'#c9ffa3'),(15,'2023-11-09 01:40:45','2023-11-09 01:40:45','Tail meatball doner ','Capicola ribeye ball tip short ribs boudin rump pancetta jowl jerky tail hamburger picanha burgdoggen.  Turducken ham hock venison, alcatra hamburger meatloaf buffalo short ribs tongue turkey fatback pork chop pig.  Swine porchetta beef ball tip.  Kielbasa ball tip shoulder strip steak drumstick.  Tail meatball doner andouille shankle shank pancetta corned beef.',24,NULL,NULL,'#b8f6ff'),(16,'2023-11-09 01:51:46','2023-11-11 01:25:50','Test Note','Hello World THis is my test description',24,10,NULL,'#fae6e6'),(17,'2023-11-09 02:00:11','2023-11-09 02:00:11','This is red title','Strip steak bresaola rump tenderloin frankfurter burgdoggen chicken hamburger.  Bacon spare ribs cupim tenderloin fatback pastrami ham hock turducken meatloaf picanha short ribs burgdoggen shoulder short loin chicken.  Shank ham hock salami, chicken frankfurter bacon pancetta pig.  Brisket sausage corned beef meatball bresaola.\n',24,NULL,NULL,'#f20000'),(18,'2023-11-09 02:17:34','2023-11-09 02:17:34','Test Title','k ground round shoulder frankfurter, brisket ribeye buffalo pork chop pig kevin ham hock meatloaf.  Corned beef meatloaf short loin filet mignon swine alcatra capicola chislic cow cupim hamburger.\n\nFilet mignon chislic sirloin meatloaf.  Short loin ham hock swine burgdoggen, pork belly ',25,NULL,NULL,'#d507e8'),(20,'2023-11-09 02:35:33','2023-11-09 04:17:05','Think & grow rich','<p><code>Doner short ribs kielbasa, f</code>rankfurter t-bone hamburger turkey. Bacon turducken jerky chicken bresaola strip steak ham hock buffalo sausage jowl beef filet mignon. Flank landjaeger frankfurter turkey burgdoggen, short loin chislic hamburger andouille beef pork loin sausage. Short loin shank ham hock buffalo kielbasa. Ground round porchetta pork loin pork belly andouille chuck biltong sausage venison.</p>',25,NULL,NULL,'#db0009'),(21,'2023-11-09 03:25:06','2023-11-11 15:06:58','ADD NEW NOTE','<h4>Burgdoggen porchetta rump shoulder buffalo, tongue pancetta ball tip. T-bone tail capicola, jowl salami tri-tip beef. Sausage burgdoggen tri-tip, g<sup>round round andouille strip steak prosciutto turkey short ribs pastrami buffalo filet mignon biltong. Leberkas pork loin landjaeger frankfurter doner ham hock, biltong pig pork belly ground round cow capicola cupim beef ribs pork.</sup></h4><p>Filet mignon spare ribs sausage bresaola, burgdoggen chicken biltong chuck beef tongue prosciutto pork. <code>Spare ribs bacon</code> fatback, pork filet mignon hamburger doner landjaeger buffalo. Ham meatball filet mignon meatloaf strip steak spare ribs pork loin salami tenderloin t-bone brisket cupim. Alcatra buffalo venison,<mark> picanha t-bone boudin chicken spare ribs. Andouille ham hamburger, ham hock kevin tenderloin spare ribs. Shank buffalo sausage cupim short loin beef ribs.</mark></p>',25,12,NULL,'#5233de'),(24,'2023-11-10 03:44:42','2023-11-10 03:44:42','meatball short ribs.','<p>  Boudin ball tip chislic spare ribs chuck, meatloaf meatball pork belly salami capicola venison chicken turkey tenderloin.  Capicola kielbasa jerky prosciutto sausage ground round short ribs flank.  Spare ribs kevin boudin tenderloin porchetta jerky shoulder.  Bacon sirloin tenderloin pork loin short ribs shankle pork belly.  Shankle swine short loin beef ribeye capicola jerky buffalo burgdoggen pastrami brisket.</p><p>C<strong>hislic shankle alcatra lan</strong>djaeger shoulder ham cow bresaola jowl pork chuck meatball.  Burgdoggen swine venison salami meatball.  Buffalo landjaeger pork belly short ribs turkey, chislic beef ribs leberkas fatback <mark>andouille sausage pancetta picanha boudin.  Buffalo kevin biltong kielbasa, swine ham turducken beef ribs.  Porchetta buffalo venison strip steak.  Pork shoulder strip steak picanha sirloin.</mark></p>',25,NULL,NULL,'#19ecff'),(25,'2023-11-10 04:43:24','2023-11-10 04:46:32','T-bone drumstick alcatra, sausork loin.','<p>Bacon ipsum dolor amet ham turkey capicola spare ribs fatback rump short loin turducken flank. Drumstick sirloin shoulder, swine chuck alcatra strip steak<mark>. Ham hock swine short ribs shank tri-tip.</mark> T-bone drumstick alcatra, sausage bacon porchetta pork loin.</p><p>Bacon ipsum dolor amet ham turkey capicola spare ribs fatback rump short loin turduck<br><br>-----✌️✌️</p><p><code>12-2312</code></p>',26,NULL,NULL,'#0023ff'),(26,'2023-11-10 04:49:58','2023-11-10 04:50:45','New Note','<p><strong>Hola, Lorem Ipsum dolor</strong><br><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"_collectionLink_nkn9e_89\" href=\"http://localhost:3000/create#\">Sales  🚚  Deliveries 💸 Discounts</a><br><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"_collectionLink_nkn9e_89\" href=\"http://localhost:3000/create#\">💰 Profits</a></p><p><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"_collectionLink_nkn9e_89\" href=\"http://localhost:3000/create#\">✨ Reports🛒 Orders📅 Events🙈 Debts💁‍♀️ Customers</a><br><br></p>',26,NULL,NULL,'#99ffea'),(28,'2023-11-11 00:50:17','2023-11-11 00:50:17','Next Level','<p><strong>চলতি মাসে<mark> আয়ারল্যান্ড ও জিব্রাল্টারের</mark> বিপক্ষে ইউরোপিয়ান চ্যাম্পিয়নশিপের বাছাইয়ের ম্যাচের জন্য নেদারল্যান্ডস দলে ডাক পেলেন জোরেল হাতো। মাত্র ১৭ বছর বয়সে আন্তর্জাতিক ফুটবলে অভিষেকের অপেক্ষায় তরুণ এই ডিফেন্ডার।</strong>&nbsp;</p>',25,5,NULL,'#96e9ff'),(29,'2023-11-11 15:09:28','2023-11-11 15:09:28','Microservices Architecture with Node.js: Building Scalable and Robust Applications','<p><mark>Microservices architecture</mark> involves breaking an application down into smaller, independent services that communicate with each other through APIs. Node.js is a popular choice for building microservices. <br><strong>The article provides</strong> a guide on setting up microservices architecture in Node.js using Seneca.js and explains how to connect microservices.</p>',25,12,NULL,'#ffbdfe'),(30,'2023-11-11 16:29:23','2023-11-11 16:38:40','Issues','<h2 style=\"text-align: center\">Issues<br></h2><ol><li><p>cache for incomplete forms.</p></li><li><p>layout issues</p></li></ol>',27,13,NULL,'#cf0a0a'),(31,'2023-11-11 16:32:57','2023-11-11 16:32:57','THE PSYCHOLOGY OF DREAMS','<p>C<em>ollected Papers on Analytical Psychology by C. G. Jung, is part of the HackerNoon Books Series. You can jump to any chapter in this book </em><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://hackernoon.com/preview/FEbEh4JqtdGMwHM9vIUT?ref=hackernoon.com\"><em>here</em></a><em>. CHAPTER XII</em></p><h2>CHAPTER XII</h2><h3>THE PSYCHOLOGY OF DREAMS</h3><p>A dream is a psychic structure which at first sight appears to be in striking contrast with conscious thought, because judging by its form and substance it apparently does not lie within the continuity of development of the conscious contents, it is not integral to it, but is a mere external and apparently accidental occurrence. Its mode of genesis is in itself sufficient to isolate a dream from the other contents of the conscious, for it is a survival of a peculiar psychic activity which takes place during sleep, and does not originate in the manifest and clearly logical and emotional continuity of the event experienced.</p><p></p>',27,NULL,NULL,'#ff0000'),(32,'2023-11-11 16:47:18','2023-11-11 17:02:02','New Notes','<p>This is new description</p>',25,15,NULL,'#000000'),(33,'2023-11-11 17:09:22','2023-11-11 17:09:22','new note','<p>this is new note</p>',25,12,NULL,'#ff0000');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (1,'read'),(2,'write'),(3,'view');
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;

--
-- Table structure for table `sharing`
--

DROP TABLE IF EXISTS `sharing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sharing` (
  `id` int NOT NULL AUTO_INCREMENT,
  `note_id` int NOT NULL,
  `permission_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `note_id` (`note_id`),
  KEY `permission_id` (`permission_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `sharing_ibfk_1` FOREIGN KEY (`note_id`) REFERENCES `notes` (`id`),
  CONSTRAINT `sharing_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`),
  CONSTRAINT `sharing_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sharing`
--

/*!40000 ALTER TABLE `sharing` DISABLE KEYS */;
INSERT INTO `sharing` VALUES (1,1,1,2);
/*!40000 ALTER TABLE `sharing` ENABLE KEYS */;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
  `name` varchar(255) DEFAULT NULL,
  `note_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `note_id` (`note_id`),
  CONSTRAINT `tags_ibfk_1` FOREIGN KEY (`note_id`) REFERENCES `notes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tags table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (2,'2023-11-08 01:36:34','test1d',NULL,23),(3,'2023-11-08 01:37:00','sports',NULL,23),(4,'2023-11-08 01:39:23','Polymer',NULL,23),(5,'2023-11-08 01:41:02','Fun',NULL,23),(6,'2023-11-08 01:41:41','Strong',NULL,23),(7,'2023-11-08 01:42:04','Programming',NULL,23),(8,'2023-11-08 01:43:56','Programming',NULL,23),(9,'2023-11-08 01:45:22','Programming',NULL,23),(13,'2023-11-08 02:07:41','Programming',NULL,23),(14,'2023-11-08 02:07:44','Programming',NULL,23),(15,'2023-11-08 02:12:08','Programming',NULL,23),(16,'2023-11-08 02:19:54','Programming',NULL,23),(17,'2023-11-08 02:49:49','Personal',NULL,23);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;

--
-- Table structure for table `trash`
--

DROP TABLE IF EXISTS `trash`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trash` (
  `id` int NOT NULL AUTO_INCREMENT,
  `note_id` int NOT NULL,
  `deleted_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `note_id` (`note_id`),
  KEY `userid` (`user_id`),
  CONSTRAINT `trash_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `userid` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trash`
--

/*!40000 ALTER TABLE `trash` DISABLE KEYS */;
INSERT INTO `trash` VALUES (1,1,'2023-09-20 01:21:34',2),(2,2,'2023-11-08 03:53:38',23),(3,1,'2023-11-08 03:54:38',23),(7,3,'2023-11-08 04:15:44',23),(21,15,'2023-11-10 04:02:24',24),(22,14,'2023-11-10 04:32:12',24),(30,19,'2023-11-10 19:36:59',25),(32,23,'2023-11-10 22:30:57',25),(35,22,'2023-11-11 01:22:27',25),(40,27,'2023-11-11 16:57:44',25),(41,29,'2023-11-11 16:57:48',25);
/*!40000 ALTER TABLE `trash` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'2023-09-19 18:31:05','ridwan','404ridwan@gmail.com','123456'),(3,'2023-09-19 18:35:08','asad','404asad@gmail.com','123456'),(8,'2023-11-06 21:51:33','ridwan3','ridwan33@gmail.com','$2a$10$OQMVvAvpLaztnVA8a2x5LOfhexc94NWe0NXBi/wnHQEc6gPx.jTj2'),(9,'2023-11-06 21:52:30','ridwan3','ridwan33@ddgmail.com','$2a$10$qCC2HjXTv9G6e88T1Ynsmeoa.0dcMVFdqKkyRw33ggV0qiX6CQcKu'),(10,'2023-11-06 21:53:11','ridwan3','ridwansss33@ddgmail.com','$2a$10$X0jqMJdqKdjtDRy75.vA9.5e5TxEgcGIwMVTxT8CKBevLCfB0qTOC'),(11,'2023-11-06 21:53:47','ridwan3','ridwanaaasss33@ddgmail.com','$2a$10$YK8YYhioLWPedu9lMXQUbuSyu/dSk1/GuKwGv4P.0Er35jKjJQqsi'),(12,'2023-11-06 21:54:10','ridwan3','ridwanaassasss33@ddgmail.com','$2a$10$FnwnzgmPKTyej9e0I8g86OKneyyEt549UoMe.2q4r7.M6W.KN.xAi'),(13,'2023-11-06 21:55:46','ridwan3','dd@ddgmail.com','$2a$10$7.WzwxF9xNfPzBBgFkeffOi80Ui5bUMWOVChx7eXaXQIqsYzUvFsi'),(14,'2023-11-06 21:56:40','ridwan3','dddfasdf@ddgmail.com','$2a$10$oS7cnU7peN8gd8Bg0ib1iu5I3m/YRjxJfFO5gL/2dXdUW2N8lIMN2'),(15,'2023-11-06 21:57:31','ridwan3','sdffdssdf@ddgmail.com','$2a$10$ifEsUXnFtMof7PB1smgyU.N6u1/hVN3d6Jhze/6gk06puU77PJi0G'),(16,'2023-11-06 21:58:18','ridwan3','sdfssfdssdf@ddgmail.com','$2a$10$fFTqMb3kS97NUf8h0J2.O.Bl0Y2mC.JU53aIpLYZKkDa1pPzHPgma'),(17,'2023-11-06 21:58:43','ridwan3','sdfsasdfsfdssdf@ddgmail.com','$2a$10$spTQwofoMDnA/lkEDGeHiOoUanRq0xrpOIkQiF1J7rAyjb2ZwfrH6'),(18,'2023-11-06 21:59:18','ridwan3','sdfsasdfsasdfdssdf@ddgmail.com','$2a$10$sn3yTiD39gnxq6ChvluQZuxQGCJd36m89HzkemIfJ8hEzcgXGRvEi'),(19,'2023-11-06 22:09:49','ridwan3','sdfsassdfasdfdfsasdfdssdf@ddgmail.com','$2a$10$oLJODK2sL7YhWfr5MyGmv..Od/3qxvGkyGG47Mdt2l759t13aKgky'),(22,'2023-11-07 16:17:08','admin','admin@ddgmail.com','$2a$10$IaSfh96.8wrp91IKJDO3XuRItAwirOe.d5KP1aykZ4nDZJslzV1G.'),(23,'2023-11-07 16:31:34','rid1','rid1@ddgmail.com','$2a$10$q/TSZooq/hMOqSPyIziv7uoYfjJyFPCrdDERVtxqoaglFQ.2Vpl6.'),(24,'2023-11-08 16:15:49','rid1','rid1@gmail.com','$2a$10$YKgTtmYuFLaFkGxeWrhIeO53BcMHG0eVSNhnNBsAK6l6SbIpo6iUO'),(25,'2023-11-08 20:06:52','ridwan','ridwan@gmail.com','$2a$10$DAvfgpUM7QOkXJz3nF6TLOsCC2QAkzEexAj1Rp/sZFBE/k6.C.442'),(26,'2023-11-09 22:39:16','xyzwww','xyz@gmail.com','$2a$10$Uy51JgbmaLiKV8wR26F0pe8X.g6TCOXV7nUNlCxTDQMxRUR6L1r5q'),(27,'2023-11-11 10:20:00','abrar','user@gmail.com','$2a$10$zs5nbMmxFxvS48BWYba7JuwLIUsTBnJPDpcz5zhwGHrrKUXTx7dQC');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

--
-- Dumping routines for database 'xNote'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-12 19:07:46
