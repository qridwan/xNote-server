-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 13, 2024 at 06:31 PM
-- Server version: 10.5.23-MariaDB-cll-lve
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qridwan_xnote`
--

-- --------------------------------------------------------

--
-- Table structure for table `attachments`
--

CREATE TABLE `attachments` (
  `id` int(11) NOT NULL,
  `note_id` int(11) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `file_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attachments`
--

INSERT INTO `attachments` (`id`, `note_id`, `file_name`, `file_path`, `file_type`) VALUES
(1, 1, 'test', 'folder/test', 'png');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `user_id`, `create_time`) VALUES
(1, 'dbms', 2, NULL),
(3, 'Programming', 23, '2023-11-08 02:31:33'),
(4, 'C++', 23, '2023-11-08 02:32:02');

-- --------------------------------------------------------

--
-- Table structure for table `notebooks`
--

CREATE TABLE `notebooks` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT current_timestamp(),
  `icon` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notebooks`
--

INSERT INTO `notebooks` (`id`, `name`, `user_id`, `create_time`, `icon`) VALUES
(3, 'Personal', 23, '2023-11-08 02:54:12', NULL),
(5, 'Apple', 25, '2023-11-11 00:22:17', '🪤'),
(6, 'Profit', 25, '2023-11-11 00:29:05', '💸'),
(7, 'Cat', 25, '2023-11-11 00:34:24', '🐈'),
(8, 'Temp', 25, '2023-11-11 00:36:42', '🤢'),
(9, 'Cold', 25, '2023-11-11 00:37:06', '🥶'),
(10, 'Work', 24, '2023-11-11 01:24:20', '🏢'),
(11, 'TempBox', 24, '2023-11-11 01:25:30', '🦧'),
(12, 'pgdict', 25, '2023-11-11 15:06:43', '🧑‍🎓'),
(13, 'PGD', 27, '2023-11-11 16:31:02', '🦴'),
(14, 'Finance', 27, '2023-11-11 16:37:28', '💵'),
(15, 'Finance', 25, '2023-11-11 16:46:10', '😀'),
(16, 'NewFolder', 25, '2023-11-12 11:04:02', '🎁'),
(17, 'test', 25, '2023-11-14 02:59:32', '🌋'),
(18, 'working.....', 29, '2023-11-15 13:32:07', '😃'),
(19, 'My Note', 30, '2023-11-16 13:51:24', '🦖'),
(20, 'Islamic', 25, '2023-12-04 03:07:29', '🕌'),
(21, 'Testing', 32, '2024-02-06 09:23:27', '😄'),
(22, 'why folder?', 33, '2024-02-06 23:53:14', '😕'),
(23, 'Testing you.', 33, '2024-02-06 23:56:58', '😉');

--
-- Triggers `notebooks`
--
DELIMITER $$
CREATE TRIGGER `notebook_delete_trigger` AFTER DELETE ON `notebooks` FOR EACH ROW UPDATE
	notes
SET
	notebook_id = NULL
WHERE
	notebook_id = OLD.id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL COMMENT 'Primary Key',
  `create_time` datetime DEFAULT current_timestamp() COMMENT 'Create Time',
  `update_time` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'Update Time',
  `title` varchar(155) DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `notebook_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `create_time`, `update_time`, `title`, `content`, `user_id`, `notebook_id`, `category_id`, `color`) VALUES
(1, '2023-09-20 00:52:17', '2023-11-08 05:01:54', 'test note', 'this is content ', 2, 3, 3, '#fff'),
(2, '2023-11-07 22:41:50', '2023-11-08 05:02:02', 'test title', 'this is content', 23, NULL, 3, '#000'),
(7, '2023-11-08 04:31:29', '2023-11-08 05:02:12', 'hello adsf', 'test ojk', 23, 3, NULL, '#EDEDED'),
(12, '2023-11-09 01:35:46', '2023-11-09 01:35:46', 'ADD NEW NOTE', 'pork swine andouille.  Tri-tip cow picanha jerky buffalo shank porchetta frankfurter biltong salami turkey hamburger.  Venison pork biltong tongue bresaola pancetta corned beef swine pork chop filet mignon chicken fatback andouille pastrami buffalo.\n\nBuffalo shankle spare ribs, ham capicola biltong short loin fatback filet mignon pig pork belly tail cow.  Biltong flank pig ball tip brisket kielbasa picanha drumstick salami hamburger short loin kevin.  Shankle ground round jowl, swine picanha buffalo short loin alcatra short ribs venison kielbasa landjaeger meatloaf chislic.  Landjaeger tenderloin pork cow ham hock porchetta chicken rump picanha venison ground round drumstick.  Short loin venison chislic meatloaf beef ribs, tri-tip ball tip kevin boudin bresaola turkey rump', 24, NULL, NULL, NULL),
(13, '2023-11-09 01:38:25', '2023-11-09 01:38:25', ' NEW NOTE 2/3', 'pork swine andouille.  Tri-tip cow picanha jerky buffalo shank porchetta frankfurter biltong salami turkey hamburger.  Venison pork biltong tongue bresaola pancetta corned beef swine pork chop filet mignon chicken fatback andouille pastrami buffalo.\n\nBuffalo shankle spare ribs, ham capicola biltong short loin fatback filet mignon pig pork belly tail cow.  Biltong flank pig ball tip brisket kielbasa picanha drumstick salami hamburger short loin kevin.  Shankle ground round jowl, swine picanha buffalo short loin alcatra short ribs venison kielbasa landjaeger meatloaf chislic.  Landjaeger tenderloin pork cow ham hock porchetta chicken rump picanha venison ground round drumstick.  Short loin venison chislic meatloaf beef ribs, tri-tip ball tip kevin boudin bresaola turkey rump', 24, NULL, NULL, '#ffa3f8'),
(14, '2023-11-09 01:39:19', '2023-11-09 01:39:19', 'Hello world', 'Buffalo shankle spare ribs, ham capicola biltong short loin fatback filet mignon pig pork belly tail cow.  Biltong flank pig ball tip brisket kielbasa picanha drumstick salami hamburger short loin kevin.  Shankle ground round jowl, swine picanha buffalo short loin alcatra short ribs venison kielbasa landjaeger meatloaf chislic.  Landjaeger tenderloin pork cow ham hock porchetta chicken rump picanha venison ground round drumstick.  Short loin venison chislic meatloaf beef ribs, tri-tip ball tip kevin boudin bresaola turkey rump', 24, NULL, NULL, '#c9ffa3'),
(15, '2023-11-09 01:40:45', '2023-11-09 01:40:45', 'Tail meatball doner ', 'Capicola ribeye ball tip short ribs boudin rump pancetta jowl jerky tail hamburger picanha burgdoggen.  Turducken ham hock venison, alcatra hamburger meatloaf buffalo short ribs tongue turkey fatback pork chop pig.  Swine porchetta beef ball tip.  Kielbasa ball tip shoulder strip steak drumstick.  Tail meatball doner andouille shankle shank pancetta corned beef.', 24, NULL, NULL, '#b8f6ff'),
(16, '2023-11-09 01:51:46', '2023-11-11 01:25:50', 'Test Note', 'Hello World THis is my test description', 24, 10, NULL, '#fae6e6'),
(17, '2023-11-09 02:00:11', '2023-11-09 02:00:11', 'This is red title', 'Strip steak bresaola rump tenderloin frankfurter burgdoggen chicken hamburger.  Bacon spare ribs cupim tenderloin fatback pastrami ham hock turducken meatloaf picanha short ribs burgdoggen shoulder short loin chicken.  Shank ham hock salami, chicken frankfurter bacon pancetta pig.  Brisket sausage corned beef meatball bresaola.\n', 24, NULL, NULL, '#f20000'),
(25, '2023-11-10 04:43:24', '2023-11-10 04:46:32', 'T-bone drumstick alcatra, sausork loin.', '<p>Bacon ipsum dolor amet ham turkey capicola spare ribs fatback rump short loin turducken flank. Drumstick sirloin shoulder, swine chuck alcatra strip steak<mark>. Ham hock swine short ribs shank tri-tip.</mark> T-bone drumstick alcatra, sausage bacon porchetta pork loin.</p><p>Bacon ipsum dolor amet ham turkey capicola spare ribs fatback rump short loin turduck<br><br>-----✌️✌️</p><p><code>12-2312</code></p>', 26, NULL, NULL, '#0023ff'),
(26, '2023-11-10 04:49:58', '2023-11-10 04:50:45', 'New Note', '<p><strong>Hola, Lorem Ipsum dolor</strong><br><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"_collectionLink_nkn9e_89\" href=\"http://localhost:3000/create#\">Sales  🚚  Deliveries 💸 Discounts</a><br><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"_collectionLink_nkn9e_89\" href=\"http://localhost:3000/create#\">💰 Profits</a></p><p><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"_collectionLink_nkn9e_89\" href=\"http://localhost:3000/create#\">✨ Reports🛒 Orders📅 Events🙈 Debts💁‍♀️ Customers</a><br><br></p>', 26, NULL, NULL, '#99ffea'),
(30, '2023-11-11 16:29:23', '2023-11-11 16:38:40', 'Issues', '<h2 style=\"text-align: center\">Issues<br></h2><ol><li><p>cache for incomplete forms.</p></li><li><p>layout issues</p></li></ol>', 27, 13, NULL, '#cf0a0a'),
(31, '2023-11-11 16:32:57', '2023-11-11 16:32:57', 'THE PSYCHOLOGY OF DREAMS', '<p>C<em>ollected Papers on Analytical Psychology by C. G. Jung, is part of the HackerNoon Books Series. You can jump to any chapter in this book </em><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://hackernoon.com/preview/FEbEh4JqtdGMwHM9vIUT?ref=hackernoon.com\"><em>here</em></a><em>. CHAPTER XII</em></p><h2>CHAPTER XII</h2><h3>THE PSYCHOLOGY OF DREAMS</h3><p>A dream is a psychic structure which at first sight appears to be in striking contrast with conscious thought, because judging by its form and substance it apparently does not lie within the continuity of development of the conscious contents, it is not integral to it, but is a mere external and apparently accidental occurrence. Its mode of genesis is in itself sufficient to isolate a dream from the other contents of the conscious, for it is a survival of a peculiar psychic activity which takes place during sleep, and does not originate in the manifest and clearly logical and emotional continuity of the event experienced.</p><p></p>', 27, NULL, NULL, '#ff0000'),
(36, '2023-11-15 13:29:53', '2023-11-15 13:29:53', 'title', '<p>By addressing these points, your code should be more robust and handle potential issues gracefully.</p>', 29, NULL, NULL, '#a13a1a'),
(37, '2023-11-16 13:52:35', '2023-11-16 13:52:35', 'thinking', '<p>I am from thinker</p>', 30, NULL, NULL, '#f70000'),
(38, '2023-12-04 02:07:35', '2023-12-07 02:48:35', 'BUET My EMAIL', '<h4><code>0423311012@iict.buet.ac.bd</code></h4>', 25, 12, NULL, '#db2a2a'),
(39, '2023-12-04 02:43:20', '2023-12-04 03:07:58', 'Milaunnabi mahfil 2023, Nabi Eidgah', '<p><mark>Muhammad Abdul aziz razbi:</mark><br>- মুত্তাকী হও যেভাবে আল্লাহ হতে বলেছেন <br>- তাকওয়া, আল্লাহর ভয়<br>- যার তাকওয়া আছে -&gt; মুত্তাকী / সলেহীন/ মুসলিমিন/ মুহসীনীন / সদেকিন/ <br>- সামাজিক / রাজনৈতিক / পারিবারিক অশান্তির মুল কারন তাকওয়ার অভাব <br>- তাকওয়া অর্জন করেন৷ আল্লাহর ডর ভয় অর্জন করেন।<br>- নিজের ছেলেকে অলি বানানোর আগে নিজেকে তাকওয়া অবলম্বন করতে হবে<br>- আলিয়া মাদ্রাসায় ইলম উঠে যাচ্ছে<br>- ইল্ম অন্বেষণ এর ইচ্ছা চলে যাচ্ছে <br>- আগামী ১০ বছর পর ঈমাম পাওয়া দুষ্কর হয়ে যাবে<br>- শিক্ষার নামে চলছে আলুভর্তা বানানোর প্রেক্টীস<br>- প্রাতিষ্ঠানিক শিক্ষার চেয়ে বেশী দরকার পারিবারিক শিক্ষা <br>- হাশরের ময়দানে এমন কিছু বান্দা আসবে ইবাদতের মাত্রা হবে মহাপর্বতসম যা ধূলিস্যাৎ হয়ে যাবে মুহুর্তের মধ্যে, হাওয়াই মিঠার মতো। কারন, এরা চুপেচাপে আল্লাহ অসন্তোষ হয় এমন কাজ করতো <br>- মোবাইল চরিত্র ধংসের মুল কারন হয়ে উঠছে<br>- চরিত্র শোধরাতে হবে, নবীর চরিত্র অনুসরণ করতে হবে।<br><br>- নবী স, আবু জর গীফার রা. ১০ নসিহত করেছেন<br>১- নিংস/এতিম/ গরীব কে ভালোবাস [- ২টি জিনিস নবী করিম স. ভালোবাসেন ১) জিহাদ ফী সাবিলিল্লাহ, ২)গরীব/এতিম কে ভালো বাসা]<br><br><br>২- নিচের দিকে তাকাবে, শুকরিয়া করতে হবে<br><br>৩- আত্বীয়স্বজনের হক যাথাযথভাবে বজায় রাখা<br>&gt; যে ব্যাক্তি রেহেমের সাথে সম্পর্ক রাখেনা, সে ব্যাক্তির সাথে রহমানের কোন সম্পর্ক নেই<br><br>৪- কারো কাছে কোন জিনিসের জন্য হাত পাতবেনা <br>৫- সদা সর্বদা ন্যায়, হক কথা বলবে<br>&gt; যে ব্যাক্তি সামর্থ্য থাকা সত্ত্বেও হক কথা বলবেনা সে হল বোবা শয়তান <br>৬- কখনো নিন্দুকের নিন্দা কে ভয় করবেনা <br>&gt; গীবত/ হিংসা <br>৭- \"লা হাওলা ওয়া কুওয়াতা ইল্লা বিল্লাহ\" জিকির করবে<br>&gt; সমস্যার সমাধান হয়<br><br></p>', 25, 20, NULL, '#0d8700'),
(41, '2023-12-11 01:38:16', '2023-12-11 01:40:20', 'ভ্যাবিলন সভ্যতা ও মুসলিম জাতির পিতার ৪ হাজার ১৪ বছর আগের অবিস্মরণীয় ইতিহাস আবু ত্বহা মুহাম্মদ আদনান', '<p>ব্যাবিলন - বর্তমান ইরাক বাগদাদ হলো বেবিলন</p><p>কুরআন প্রত্যেক বিষয়ে ব্যাখ্যা রয়েছে </p><p><mark>সুরাতুল বাকার ১০১/১০২</mark></p><p>৪২০০ বছর আগে সুন্দরফুটফুটে বাচ্চা জম্ম গ্রহণ করে</p><p>নমরুদের পুরোহিতের ঘরে জন্ম নেয় তৌহিদের শেখর হজরত ইব্রাহিম আলাইহিস্সালাম</p><p>এ সভ্যতাকে বলা হয় কালাদিউ সভ্যতা বলা হয় ।</p><p>নমরুদ ৪০০ বছর বেচে ছিল</p><p>যারা সমাজ কে পরির্বতনকরে তারা কখনো সমাজের জাহিলিয়তে গা ভাসায় না </p><p><mark>সূরা মারিয়াম ৪১-৪৫</mark></p><p><strong>وَٱذۡكُرۡ فِى ٱلۡكِتَٰبِ إِبۡرَٰهِيمَۚ إِنَّهُۥ كَانَ صِدِّيقًا نَّبِيًّا</strong></p><p>আপনি এই কিতাবে ইব্রাহীমের কথা বর্ণনা করুন। নিশ্চয় তিনি ছিলেন সত্যবাদী, নবী।</p><p><strong>إِذۡ قَالَ لِأَبِيهِ يَٰٓأَبَتِ لِمَ تَعۡبُدُ مَا لَا يَسۡمَعُ وَلَا يُبۡصِرُ وَلَا يُغۡنِى عَنكَ شَيۡـًٔا</strong></p><p>যখন তিনি তার পিতাকে বললেনঃ হে আমার পিতা, যে শোনে না, দেখে না এবং তোমার কোন উপকারে আসে না, তার এবাদত কেন কর?</p><p><strong>يَٰٓأَبَتِ إِنِّى قَدۡ جَآءَنِى مِنَ ٱلۡعِلۡمِ مَا لَمۡ يَأۡتِكَ فَٱتَّبِعۡنِىٓ أَهۡدِكَ صِرَٰطًا سَوِيًّا</strong></p><p>হে আমার পিতা, আমার কাছে এমন জ্ঞান এসেছে; যা তোমার কাছে আসেনি, সুতরাং আমার অনুসরণ কর, আমি তোমাকে সরল পথ দেখাব।</p><p><strong>يَٰٓأَبَتِ لَا تَعۡبُدِ ٱلشَّيۡطَٰنَۖ إِنَّ ٱلشَّيۡطَٰنَ كَانَ لِلرَّحۡمَٰنِ عَصِيًّا</strong></p><p>হে আমার পিতা, শয়তানের এবাদত করো না। নিশ্চয় শয়তান দয়াময়ের অবাধ্য।</p><p><strong>يَٰٓأَبَتِ إِنِّىٓ أَخَافُ أَن يَمَسَّكَ عَذَابٌ مِّنَ ٱلرَّحۡمَٰنِ فَتَكُونَ لِلشَّيۡطَٰنِ وَلِيًّا</strong></p><p>হে আমার পিতা, আমি আশঙ্কা করি, দয়াময়ের একটি আযাব তোমাকে স্পর্শ করবে, অতঃপর তুমি শয়তানের সঙ্গী হয়ে যাবে।</p><p>-——————————————-————————</p><p>একটা নসিহত কখনোও নিজেকে জাহির করবেনা, করলে আল্লাহ পাক জ্ঞানকে তুলে নিবেন </p><p>-——————————————-————————</p><p>॰যোগ্যতা কে মুল্যায়ন করতে হবে </p><p>বাবার উত্তর: </p><p><mark>Maryam 19:46</mark></p><p><strong>قَالَ أَرَاغِبٌ أَنتَ عَنۡ ءَالِهَتِى يَٰٓإِبۡرَٰهِيمُۖ لَئِن لَّمۡ تَنتَهِ لَأَرۡجُمَنَّكَۖ وَٱهۡجُرۡنِى مَلِيًّا</strong></p><p>পিতা বললঃ হে ইব্রাহীম, তুমি কি আমার উপাস্যদের থেকে মুখ ফিরিয়ে নিচ্ছ? যদি তুমি বিরত না হও, আমি অবশ্যই প্রস্তরাঘাতে তোমার প্রাণনাশ করব। তুমি চিরতরে আমার কাছ থেকে দূর হয়ে যাও।</p><p>ইব্রাহিম আলাইহিসালাম উত্তর: </p><p><mark>Maryam 19:47</mark></p><p><strong>قَالَ سَلَٰمٌ عَلَيۡكَۖ سَأَسۡتَغۡفِرُ لَكَ رَبِّىٓۖ إِنَّهُۥ كَانَ بِى حَفِيًّا</strong></p><p>ইব্রাহীম বললেনঃ তোমার উপর শান্তি হোক, আমি আমার পালনকর্তার কাছে তোমার জন্যে ক্ষমা প্রার্থনা করব। নিশ্চয় তিনি আমার প্রতি মেহেরবান।</p><p>॰ দ্বীনের পথে কলতে গেলে  সর্বপ্রথম বাধা পরিবার থেকে আসতে পারে</p><p>॰ ইব্রাহিমআলাইহিস সালাম এবং মুহাম্মদ সাল্লাল্লাহু আলাইহী ওয়াসল্লাম এর স্পেশাল নিয়ামত হল স্ত্রী</p><p>॰ হক পন্থীদের আল্লাহর নিয়ামত হল একাকীত্ব</p><p> সূরা আম্বিয়া/ সফফা/ আন’আম</p><p>॰ আল্লাহ, রসূল, সাহাবী সবাইকে মানতে হবে  </p><p>॰ বাপদাদাদের দেখেছি এভাবে পূজা করতে তাই করতেছি </p><p>॰ নুহ আলাইহিস সালাম থেকে মূর্তি পূজা শুরু হয়েছিল</p><p>❓আসলেই কী তারা শুনতে পায় , আসলেই কি তারা উপকার করতে পারে , আসলেই কী তারা সৃষ্টিকর্তার প্রতিমূর্তি হতে পারে ? </p><p>॰যে যতোবড় জালেম তার বুদ্ধি ততো মোটা </p><p>॰জুলুম মানুষের বুদ্ধি লোপ করে দেয়</p><p>॰শিরক মানুষের মনে ভয় সঞ্চার করে </p><p>॰মুশরেক কখনো ইসলামে বীজয় লাভ করতে পারে নায়<br></p><p><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://youtu.be/GRAFzki2cUs?si=Xbx3AiHzTnksloC9\">https://youtu.be/GRAFzki2cUs?si=Xbx3AiHzTnksloC9 </a></p><p></p>', 25, 20, NULL, '#0019a3'),
(43, '2024-01-09 11:06:00', '2024-02-06 09:31:44', 'Recommendation Letter, Tariqul Sir', '<p style=\"text-align: center\">TO WHOM IT MAY CONCERN,</p><p>I am writing to wholeheartedly recommend Mohammad Ridwanul Alam for admission to the Master\'s Program at your esteemed University. Having had the privilege of being his professor for more than four years, I am confident in his capabilities and potential for success in your program.</p><p>Mohammad Ridwanul Alam completed his undergraduate studies in the Department of Wet Processing Engineering at Textile Engineering College, Zorargonj, affiliated with Bangladesh University of Textiles. I had the pleasure of teaching him courses such as AE185 (Computer Fundamental), AE128 (Electrical &amp; Electronics Engineering), and WPE347 (Application of Computer in Wet Processing).</p><p>Throughout my interactions with Ridwanul, he consistently displayed attentiveness and intellectual curiosity. His performance in both practical and theoretical aspects of the courses was noteworthy. His interest in practical learning techniques was noticeable, and he actively participated in class discussions and research-related activities.</p><p>For his project, Ridwanul undertook a comprehensive study on the attributes of fibers during various processes. His dedication to the project, coupled with his ability to seek guidance when needed, resulted in the submission of a flawless paper.</p><p>I have full confidence in Ridwanul\'s ability to excel in his graduate studies. His commendable performance over the years and his active involvement in various capacities make him an outstanding candidate. I am certain that he will make a valuable addition to your university and contribute positively to its community.</p><p>He is trying to diversify his knowledge from Textile to IT, expressing a keen interest in diving into software engineering. I wish him the very best of luck, and I am confident that he will shine in this field.</p><p>Should you have any further inquiries or require additional information, please feel free to contact me.</p><p><br></p><p>Regards,</p><p><br><br></p><p>________________</p><p>Md Tariqul Islam</p><p>Associate Professor (Dept. of Information Technology)</p><p>Textile Engineering College, Zorargonj, Chattogram</p><p>E-mail: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:tariqulislam.butex@gmail.com\"><u>tariqulislam.butex@gmail.com</u></a>&nbsp;</p>', 25, 8, NULL, '#296b53'),
(44, '2024-01-09 12:14:55', '2024-02-06 09:27:51', 'Study Plan for Master\'s Studies ', '<h3>Name: Mohammad Ridwanul Alam</h3><h2 style=\"text-align: center\"><strong>Study Plan for Master\'s Studies&nbsp;</strong></h2><p>I\'m Mohammad Ridwanul Alam, a Textile Engineering graduate from Bangladesh University of Textiles. Excited to combine my diverse background in Textile Engineering with my experience as a Software Developer, I\'m eager to dive into the dynamic world of Computer Science and Software Engineering. Despite not having an IT major, my passion for software development has driven me to self-learn valuable skills using open-source, on-campus, and remote resources.</p><p>My graduation in 2019 laid the academic foundation in Textile Engineering, while my professional experience equipped me with essential problem-solving skills and a structured approach to driving innovation. Applying my knowledge across various real-world scenarios, I continually expand my expertise and adapt to new challenges. Now aiming to push boundaries and create a positive impact in the evolving technological landscape.</p><h3><strong>Academic and Professional Journey</strong></h3><p>My venture into Information Technology commenced in 2020 with a remote Full-stack Software Developer role in India. During this period, I cultivated proficiency in Python, JavaScript, C, and C++, while also gaining hands-on expertise in database management and data communication.</p><p>As a Full-stack software developer, I have successfully navigated diverse projects, addressing unique challenges and applying my programming expertise creatively. Beyond the confines of the workplace, my pursuit of knowledge extends to attending webinars, participating in coding competitions, and exploring new frameworks to stay abreast of industry trends.</p><p>Driven by a passion for IT, I dedicate my leisure time to engaging in coding tutorials and personal projects, fostering creativity and refining my problem-solving skills. Collaboration has been a cornerstone of my journey, with diverse teamwork experiences teaching me the significance of effective communication in achieving success.</p><p>Currently, I am enrolled on campus in a Postgraduate Diploma in ICT (PGDICT) program (offering 36 credits) at Bangladesh University of Engineering and Technology (BUET) in 2023. In the first semester, I successfully completed 9 credits with courses in Programming Concepts, Database Design and Management, and Visual Programming. The Programming Concepts course covered an array of topics, including Introduction to programming and logic flow, procedural versus object-oriented programming, data types, variables, constants, operators, expressions, input-output, control structures, arrays, functions, pointers, file access, structures, dynamic memory allocation, classes, objects, constructor and destructor, inheritance, polymorphism, files, and exception handling.</p><p>The Database Design and Management course delved into Introduction to database, Relational model (structure, relational algebra, SQL, and advanced SQL), Database design and the entity-relationship model, Relational database design and normalisation, application design and development, indexing, Database storage and file structure, transaction management, concurrency control recovery management, object database, and database administration.</p><p>In the Visual Programming course, I acquired knowledge in Data types, variables, and expressions, control structures; Classes and objects, constructors; Inheritance, packages, and interfaces; Exception handling; Collection classes: array, vector; Threads; GUI development; applets; Graphics and multimedia; Servlet; JDBC; Java beans; Java server page; Java networking.</p><p>Looking ahead, I am eager to continue growing in the dynamic IT realm, embracing challenges, expanding my skills, and making impactful contributions. IT has been transformative, fostering both professional and personal growth. With unwavering dedication, I am poised to thrive in this ever-evolving field.<br><br></p><h3><strong>Transition and Motivation for Master\'s Studies</strong></h3><p>Embarking on the path of Information Technology has ignited my curiosity and a profound eagerness to delve deeper into the intricacies of this dynamic field. Armed with existing technical skills, I am now driven to pursue a Master\'s degree in Software Engineering, marking a significant leap in my academic and professional journey. This decision is propelled by my aspiration to seamlessly blend my technical prowess with a comprehensive understanding of communication systems and cutting-edge software technologies. This academic pursuit signifies not only a personal milestone but also a strategic move to broaden my knowledge horizon and make substantial contributions to the evolving landscape of IT.</p><h3><strong>Study Objectives and Research Interests</strong></h3><p>As I look forward to embarking on the Master\'s program, my excitement revolves around three main areas – Software Engineering, Data Analysis, and Communication. These fields not only spark my intellectual curiosity but also represent exciting avenues for exploration.</p><p>Adding a unique twist to my academic journey, I\'m thrilled about the prospect of merging textile engineering with information technology. The idea of finding innovative connections between these seemingly different realms is like solving a captivating puzzle, and I\'m eager to unravel creative solutions that harmonise these diverse domains.</p><p>Beyond the serious academic pursuits, my goal is to infuse a sense of fun and curiosity into this learning adventure. I see this journey as an opportunity to not just study these subjects but to play with ideas, make unexpected connections, and maybe even stumble upon some unconventional yet brilliant solutions.</p><p>In essence, I\'m not just here to master these disciplines individually but to dance between them, exploring the synergies and discovering how they can amplify each other. Picture it as a unique blend of academic exploration and creative experimentation – a bit like mixing colors on a canvas to create something entirely new and exciting.</p><p>So, as I set sail into the Master\'s program, my aim is not just to gain knowledge but to craft a dynamic, interdisciplinary skill set. I want to be that technologist who not only understands the intricacies of Software Engineering, Data Analysis, and Communication but also sees the playful potential in merging the worlds of technology and textiles.</p><p>Here\'s to an adventure filled with learning, laughter, and, of course, a sprinkle of unexpected discoveries!</p><h3><strong>Reason for Choosing China and Expectations from the Program</strong></h3><p>China\'s leading role in technology and its dedication to academic excellence have really caught my attention. I\'m excited about the idea of pursuing higher education in such a dynamic and forward-thinking place. The rich culture, top-notch research facilities, and amazing faculty in China make it an ideal destination for my studies.</p><p>I come from a diverse background, especially transitioning into Software Engineering. I believe this diversity will bring a fresh perspective to the learning environment. I\'m not just looking to absorb knowledge; I\'m eager to actively contribute to the field based on my varied experiences. What makes China even more appealing is its immersive learning environment. The hands-on experience and exposure to advanced technologies are exactly what I\'m looking for in my academic journey. I see this as not just getting a degree but embarking on a meaningful adventure of growth and contribution.</p><p>In a nutshell, I\'m thrilled about the idea of studying in China. It\'s not just about expanding my personal horizons; it\'s about being part of the vibrant academic landscape and making a real impact in the world of Software Engineering.</p><h3><strong>Conclusion</strong></h3><p>I am truly excited about the prospect of contributing to China\'s dynamic academic community, acquiring advanced knowledge, and participating in collaborative research initiatives. Your esteemed institution stands out as the perfect platform for my growth in IT, and I\'m genuinely enthusiastic about embarking on this transformative journey. The opportunity to be a part of such a renowned academic environment is something I eagerly look forward to.</p><p><br></p><p>Sincerely <br>Mohammad Ridwanul Alam<br>Chittagong, Bangladesh</p><p><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"mailto:404ridwan@gmail.com\"><u>404ridwan@gmail.com</u></a> | +8801521-328978&nbsp;</p>', 25, 15, NULL, '#105c02'),
(45, '2024-02-06 09:24:20', '2024-02-06 09:25:37', 'ADD NEW NOTE', '<p style=\"text-align: right\"><strong>Hello World</strong>, <br>This is my first note in this application.</p>', 32, NULL, NULL, '#ff0808'),
(46, '2024-02-06 23:50:43', '2024-02-06 23:50:43', 'Testing', '<p>description always not required. sometimes title is enough</p>', 33, NULL, NULL, '#058236'),
(48, '2024-02-06 23:59:33', '2024-02-06 23:59:33', 'testing3', '<p>description always not required. Sometimes title is enough.</p>', 33, 22, NULL, '#7edb72'),
(49, '2024-02-07 03:04:24', '2024-02-07 03:04:24', 'title', '<p>description</p>', 33, NULL, NULL, '#292929'),
(50, '2024-02-07 20:39:20', '2024-02-07 20:39:20', 'title4', '<p>title4</p>', 33, NULL, NULL, '#e80707'),
(53, '2024-02-11 08:52:23', '2024-02-11 08:52:23', 'test', '<p>test</p>', 25, NULL, NULL, '#21ff0d'),
(54, '2024-02-11 08:53:45', '2024-02-11 08:53:45', 'testt', '<p>test</p>', 25, NULL, NULL, '#7caff7'),
(55, '2024-02-11 08:55:02', '2024-02-11 08:55:02', 'testdd', '<p>asdf</p>', 25, 20, NULL, '#fce1e1'),
(56, '2024-02-13 07:54:52', '2024-02-13 07:54:52', 'sfdasasdfas', '<p>asdfasdfasd asdfs</p>', 25, NULL, NULL, '#e3afaf'),
(57, '2024-02-13 08:07:37', '2024-02-13 08:07:37', 'Thinking', '<p>sfsd</p>', 25, 20, NULL, '#db2a2a'),
(59, '2024-02-13 09:14:30', '2024-02-13 09:14:30', 'Think and grow rich', '<p style=\"text-align: right\">Hello there,<br>What you are working today??</p>', 25, NULL, NULL, '#f7c6c6');

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`id`, `name`) VALUES
(1, 'read'),
(2, 'write'),
(3, 'view');

-- --------------------------------------------------------

--
-- Table structure for table `sharing`
--

CREATE TABLE `sharing` (
  `id` int(11) NOT NULL,
  `note_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sharing`
--

INSERT INTO `sharing` (`id`, `note_id`, `permission_id`, `user_id`) VALUES
(1, 1, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL COMMENT 'Primary Key',
  `create_time` datetime DEFAULT current_timestamp() COMMENT 'Create Time',
  `name` varchar(255) DEFAULT NULL,
  `note_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tags table';

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `create_time`, `name`, `note_id`, `user_id`) VALUES
(2, '2023-11-08 01:36:34', 'test1d', NULL, 23),
(3, '2023-11-08 01:37:00', 'sports', NULL, 23),
(4, '2023-11-08 01:39:23', 'Polymer', NULL, 23),
(5, '2023-11-08 01:41:02', 'Fun', NULL, 23),
(6, '2023-11-08 01:41:41', 'Strong', NULL, 23),
(7, '2023-11-08 01:42:04', 'Programming', NULL, 23),
(8, '2023-11-08 01:43:56', 'Programming', NULL, 23),
(9, '2023-11-08 01:45:22', 'Programming', NULL, 23),
(13, '2023-11-08 02:07:41', 'Programming', NULL, 23),
(14, '2023-11-08 02:07:44', 'Programming', NULL, 23),
(15, '2023-11-08 02:12:08', 'Programming', NULL, 23),
(16, '2023-11-08 02:19:54', 'Programming', NULL, 23),
(17, '2023-11-08 02:49:49', 'Personal', NULL, 23);

-- --------------------------------------------------------

--
-- Table structure for table `trash`
--

CREATE TABLE `trash` (
  `id` int(11) NOT NULL,
  `note_id` int(11) NOT NULL,
  `deleted_at` datetime DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trash`
--

INSERT INTO `trash` (`id`, `note_id`, `deleted_at`, `user_id`) VALUES
(1, 1, '2023-09-20 01:21:34', 2),
(2, 2, '2023-11-08 03:53:38', 23),
(3, 1, '2023-11-08 03:54:38', 23),
(7, 3, '2023-11-08 04:15:44', 23),
(21, 15, '2023-11-10 04:02:24', 24),
(22, 14, '2023-11-10 04:32:12', 24),
(30, 19, '2023-11-10 19:36:59', 25),
(32, 23, '2023-11-10 22:30:57', 25),
(35, 22, '2023-11-11 01:22:27', 25),
(40, 27, '2023-11-11 16:57:44', 25),
(44, 34, '2023-11-12 14:24:17', 25),
(45, 33, '2023-11-12 14:24:22', 25),
(46, 21, '2023-11-14 02:56:24', 25),
(47, 36, '2023-11-15 13:33:30', 29),
(49, 29, '2023-12-04 02:06:06', 25),
(50, 20, '2023-12-04 02:06:09', 25),
(51, 32, '2023-12-04 02:06:13', 25),
(52, 28, '2023-12-04 02:06:15', 25),
(53, 35, '2023-12-04 02:06:18', 25),
(54, 24, '2023-12-04 02:06:21', 25),
(55, 18, '2023-12-04 02:06:25', 25),
(56, 42, '2023-12-21 05:59:45', 25),
(57, 40, '2023-12-21 06:00:19', 25),
(60, 47, '2024-02-06 23:55:36', 33),
(61, 38, '2024-02-07 05:17:56', 25),
(62, 51, '2024-02-11 08:50:44', 25),
(63, 52, '2024-02-11 08:52:03', 25),
(64, 58, '2024-02-13 08:12:14', 25),
(65, 57, '2024-02-13 08:12:17', 25),
(66, 55, '2024-02-13 08:12:24', 25),
(67, 59, '2024-02-13 09:16:03', 25);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL COMMENT 'Primary Key',
  `create_time` timestamp NULL DEFAULT current_timestamp(),
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `create_time`, `username`, `email`, `password`) VALUES
(2, '2023-09-19 18:31:05', 'ridwan', '404ridwan@gmail.com', '123456'),
(3, '2023-09-19 18:35:08', 'asad', '404asad@gmail.com', '123456'),
(8, '2023-11-06 21:51:33', 'ridwan3', 'ridwan33@gmail.com', '$2a$10$OQMVvAvpLaztnVA8a2x5LOfhexc94NWe0NXBi/wnHQEc6gPx.jTj2'),
(9, '2023-11-06 21:52:30', 'ridwan3', 'ridwan33@ddgmail.com', '$2a$10$qCC2HjXTv9G6e88T1Ynsmeoa.0dcMVFdqKkyRw33ggV0qiX6CQcKu'),
(10, '2023-11-06 21:53:11', 'ridwan3', 'ridwansss33@ddgmail.com', '$2a$10$X0jqMJdqKdjtDRy75.vA9.5e5TxEgcGIwMVTxT8CKBevLCfB0qTOC'),
(11, '2023-11-06 21:53:47', 'ridwan3', 'ridwanaaasss33@ddgmail.com', '$2a$10$YK8YYhioLWPedu9lMXQUbuSyu/dSk1/GuKwGv4P.0Er35jKjJQqsi'),
(12, '2023-11-06 21:54:10', 'ridwan3', 'ridwanaassasss33@ddgmail.com', '$2a$10$FnwnzgmPKTyej9e0I8g86OKneyyEt549UoMe.2q4r7.M6W.KN.xAi'),
(13, '2023-11-06 21:55:46', 'ridwan3', 'dd@ddgmail.com', '$2a$10$7.WzwxF9xNfPzBBgFkeffOi80Ui5bUMWOVChx7eXaXQIqsYzUvFsi'),
(14, '2023-11-06 21:56:40', 'ridwan3', 'dddfasdf@ddgmail.com', '$2a$10$oS7cnU7peN8gd8Bg0ib1iu5I3m/YRjxJfFO5gL/2dXdUW2N8lIMN2'),
(15, '2023-11-06 21:57:31', 'ridwan3', 'sdffdssdf@ddgmail.com', '$2a$10$ifEsUXnFtMof7PB1smgyU.N6u1/hVN3d6Jhze/6gk06puU77PJi0G'),
(16, '2023-11-06 21:58:18', 'ridwan3', 'sdfssfdssdf@ddgmail.com', '$2a$10$fFTqMb3kS97NUf8h0J2.O.Bl0Y2mC.JU53aIpLYZKkDa1pPzHPgma'),
(17, '2023-11-06 21:58:43', 'ridwan3', 'sdfsasdfsfdssdf@ddgmail.com', '$2a$10$spTQwofoMDnA/lkEDGeHiOoUanRq0xrpOIkQiF1J7rAyjb2ZwfrH6'),
(18, '2023-11-06 21:59:18', 'ridwan3', 'sdfsasdfsasdfdssdf@ddgmail.com', '$2a$10$sn3yTiD39gnxq6ChvluQZuxQGCJd36m89HzkemIfJ8hEzcgXGRvEi'),
(19, '2023-11-06 22:09:49', 'ridwan3', 'sdfsassdfasdfdfsasdfdssdf@ddgmail.com', '$2a$10$oLJODK2sL7YhWfr5MyGmv..Od/3qxvGkyGG47Mdt2l759t13aKgky'),
(22, '2023-11-07 16:17:08', 'admin', 'admin@ddgmail.com', '$2a$10$IaSfh96.8wrp91IKJDO3XuRItAwirOe.d5KP1aykZ4nDZJslzV1G.'),
(23, '2023-11-07 16:31:34', 'rid1', 'rid1@ddgmail.com', '$2a$10$q/TSZooq/hMOqSPyIziv7uoYfjJyFPCrdDERVtxqoaglFQ.2Vpl6.'),
(24, '2023-11-08 16:15:49', 'rid1', 'rid1@gmail.com', '$2a$10$YKgTtmYuFLaFkGxeWrhIeO53BcMHG0eVSNhnNBsAK6l6SbIpo6iUO'),
(25, '2023-11-08 20:06:52', 'ridwan', 'ridwan@gmail.com', '$2a$10$DAvfgpUM7QOkXJz3nF6TLOsCC2QAkzEexAj1Rp/sZFBE/k6.C.442'),
(26, '2023-11-09 22:39:16', 'xyzwww', 'xyz@gmail.com', '$2a$10$Uy51JgbmaLiKV8wR26F0pe8X.g6TCOXV7nUNlCxTDQMxRUR6L1r5q'),
(27, '2023-11-11 10:20:00', 'abrar', 'user@gmail.com', '$2a$10$zs5nbMmxFxvS48BWYba7JuwLIUsTBnJPDpcz5zhwGHrrKUXTx7dQC'),
(28, '2023-11-12 14:56:57', 'admin', 'admin@inet.com', '$2a$10$rZc46EDTjhoQ22WaBghLNumVmvIx2lF3RVUF2EmGKFofZrnCCZ1KG'),
(29, '2023-11-15 18:27:52', 'ahmed', 'ahmed@50.com', '$2a$10$pLtL1Rz76libmI6SjQ/n7.YXca0iPVWI7yPWG5OyPM6UtPlpMQil6'),
(30, '2023-11-16 18:50:27', 'shagar', 'shagar@gmail.com', '$2a$10$pCfRrOqMnPx6DqnDYeDyDuMG1rgjhV5bbWkrzUbjaS.iAaDC7LJsa'),
(31, '2023-12-21 11:37:13', 'eeeeee', 'eee@gmail.com', '$2a$10$cYuhAEfrZYE4FGW38MDitOqyV.ioUa5sh7Y5QHh5PXb9xkhpOcsve'),
(32, '2024-02-06 14:23:08', 'xyzridwan', 'ridwan123@gmail.com', '$2a$10$NxLz.fsQ8F41S.4TLu97O.GtP2I423mTtAOJpYgWRmb2MqcSKFjBW'),
(33, '2024-02-07 04:48:05', 'anoymous', 'anoymous@gmail.com', '$2a$10$mULXcqwzrI3EK2A2OdWr9OnL/r08Fm9Saw03/XlA/jqsWGd8iec2u');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `note_id` (`note_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `notebooks`
--
ALTER TABLE `notebooks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `notebook_id` (`notebook_id`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sharing`
--
ALTER TABLE `sharing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `note_id` (`note_id`),
  ADD KEY `permission_id` (`permission_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `note_id` (`note_id`);

--
-- Indexes for table `trash`
--
ALTER TABLE `trash`
  ADD PRIMARY KEY (`id`),
  ADD KEY `note_id` (`note_id`),
  ADD KEY `userid` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attachments`
--
ALTER TABLE `attachments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `notebooks`
--
ALTER TABLE `notebooks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key', AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sharing`
--
ALTER TABLE `sharing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key', AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `trash`
--
ALTER TABLE `trash`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key', AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attachments`
--
ALTER TABLE `attachments`
  ADD CONSTRAINT `attachments_ibfk_1` FOREIGN KEY (`note_id`) REFERENCES `notes` (`id`);

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `notebooks`
--
ALTER TABLE `notebooks`
  ADD CONSTRAINT `notebooks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `notes_ibfk_2` FOREIGN KEY (`notebook_id`) REFERENCES `notebooks` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sharing`
--
ALTER TABLE `sharing`
  ADD CONSTRAINT `sharing_ibfk_1` FOREIGN KEY (`note_id`) REFERENCES `notes` (`id`),
  ADD CONSTRAINT `sharing_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`),
  ADD CONSTRAINT `sharing_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `tags`
--
ALTER TABLE `tags`
  ADD CONSTRAINT `tags_ibfk_1` FOREIGN KEY (`note_id`) REFERENCES `notes` (`id`);

--
-- Constraints for table `trash`
--
ALTER TABLE `trash`
  ADD CONSTRAINT `trash_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `userid` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
