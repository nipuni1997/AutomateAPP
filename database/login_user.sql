-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: login
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(500) NOT NULL,
  `userrole` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (6,'Qqq@gmail.com','Aaaa','Wwww','customer'),(7,'Jk','Jkk','Jkk','customer'),(8,'Ni@gmail.com','Ni','$2b$10$OVO7g0jOCk997oQgmhQkp.v1P/SHe36jMKJPW.L6W4LM6.MbG7i6C','customer'),(11,'Samanthi@gmail.com','Samanthi','$2b$10$bletqQfj1.2Nzskh8SPvI.z1rp07sAXMakwIkUNqzytcs5aIZAa2O','customer'),(15,'Sama@gmail.com','Sama','$2b$10$7U0YKc./vvEw2B1.kamV/OHK4Nf/ALYbcq9nH707r3T1cnawh/J3C','repair'),(16,'Ama@gmail.com','Ama','$2b$10$ilgd8ki6QDDtoeNt8t1wG.6LHE.CQbn7nb.j1c7EhWdTIEryXOTn2','repair'),(17,'Shashi@gmail.com','Shashi','$2b$10$CrXvbx8L8Yj/PzLdlWtKmOR1.ymszL50f7vO9oXXIMt45dTFLr7DW','repair'),(28,'Sanju@gmail.com','Sanju Repair station','$2b$10$hAfX0iEM/wvCBdug3e/IXuC4Go.IjCrDWNdUbjzsHUxNgUHwKJKma','repair'),(30,'Tire@gmail.com','Tire House','$2b$10$yrzqVR6CAVfHW8MAHvZc1eXuZ.dX2J.gZJzj77W/FeYFD4AYqNZq2','repair'),(31,'House@gmail.com','House of spare','$2b$10$wNtRYIyPWB7GbclSXCRSguzGpzh/Ih3uW4rpwujhtXaTKWNR69DSa','repair'),(32,'Jb@gmail.com','Justin ','$2b$10$qTa1arp7SxiwUf/1oe5.rebq.ffdZhhsauV0VE/6FyvUB1c1vpFgO','customer'),(38,'Kamal@gmail.com','Kamal','$2b$10$6ppPJJxT02V4NTNDVGqv6eC4/cKRO.1erAtpEOOM3fZM79n21WEim','repair'),(41,'nipuniw@gmail.com','Nipuni','$2b$10$XYR97WfqZaRDHO4e/7o16eHj0Dnz87XKu4MLsSXWgcckHAYS1h4bO','customer'),(42,'sanjulawithana@gmail.com','sanjula','$2b$10$tIfF46Kz/3l9H/3W4uE8EOkkOWzcDN7i7gIPJsuv5ERWRd3a2ZK3i','customer'),(43,'dilanka@gmail.com','Dilanka','$2b$10$hJ4GmczmgHt8274WvxA1F..jHSXIqOb7flVnCy1U9i94zFgL8cND6','repair'),(44,'simani@gmail.com','Simani','$2b$10$ZXd5uKon3RmyLPa0GjCDhe3qM6eY/L4nU93eOQc99uxCXQJX5RysC','customer'),(45,'samanthideepika@gmail.com','Samanthi','$2b$10$OLXNV13bRLr6.TAzIX4Rj.FVKvCu3aatPvwvsfGao8eBd3P.AoJdK','customer');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-24 11:27:59
