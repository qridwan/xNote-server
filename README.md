# xNote Application Backend Service

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Data Requirements](#data-requirements)
   - [Users](#users)
   - [Notes](#notes)
   - [Categories](#categories)
   - [Tags](#tags)
   - [Attachments](#attachments)
   - [Notebooks](#notebooks)
   - [Trash](#trash)
   - [Sharing](#sharing)
   - [Permissions](#permissions)
5. [Database E/R Design](#database-er-design)
6. [Links](#links)

---

## Introduction

**xNote** is a smart note-taking application that provides a digital platform for users to create, manage, and organize text-based notes. It enables users to efficiently capture, edit, categorize, and search for notes.

---

## Features

- **User Registration and Login**\
  Secure account creation and login.
- **Create and Edit Notes**\
  Ability to create, edit, and update text-based notes.
- **Note Organization**\
  Organize notes into notebooks or folders with tags for better categorization.
- **Attachments**\
  Attach files (e.g., images, documents) to notes.
- **Trash and Recovery**\
  Deleted notes are moved to trash and can be recovered.
- **Sharing**\
  Share notes with others, including collaborative editing and commenting.

---

## Installation

To install the xNote application backend service:

1. Clone the repository:
   ```bash
   git clone https://github.com/qridwan/xNote-server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd xNote-server
   ```
3. Install dependencies:
   ```bash
   yarn
   ```
4. Set up environment variables by creating a `.env` file using configurations from `.env.example`.
5. Seed the database using the provided SQL file:
   ```bash
   	src/database/qridwan_xnote.sql
   ```
6. Start the server:
   ```bash
   yarn dev
   ```
   ```bash
   yarn dev
   ```

---

## Data Requirements

### Users

| userID (PK) | username | email                                       | password  |
| ----------- | -------- | ------------------------------------------- | --------- |
| 101         | ridwan   | [mail@qridwan.com](mailto:mail@qridwan.com) | ridwan123 |
| 102         | asad     | [mail@asad.com](mailto:mail@asad.com)       | asad123   |

### Notes

| noteID (PK) | userID (FK) | note_title | content  | created_at | updated_at |
| ----------- | ----------- | ---------- | -------- | ---------- | ---------- |
| 1           | 101         | title 1    | content1 | timezone   | timezone   |

### Categories

| categoryID (PK) | userID (FK) | category_name |
| --------------- | ----------- | ------------- |
| 1               | 101         | Work          |
| 2               | 101         | Personal      |

### Tags

| tagID (PK) | userID (FK) | tag_name  |
| ---------- | ----------- | --------- |
| 1          | 101         | Important |
| 2          | 101         | Travel    |

### Attachments

| attID (PK) | noteID (FK) | att_filename | att_filetype | att_file_path  |
| ---------- | ----------- | ------------ | ------------ | -------------- |
| 1          | 1           | note1        | png          | work/note1.png |

### Notebooks

| notebookID | userID | notebook_name | note_id |
| ---------- | ------ | ------------- | ------- |
| 1          | 101    | book1         | 2       |

### Trash

| trashID (PK) | userID (FK) | noteID (FK) | timestamp  |
| ------------ | ----------- | ----------- | ---------- |
| 1            | 101         | 2           | 12/08/2023 |

### Sharing

| sharingID (PK) | noteID (FK) | sharedUserID (FK) | permissionID (FK) |
| -------------- | ----------- | ----------------- | ----------------- |
| abc01          | 2           | 101               | 1                 |

### Permissions

| permissionID (PK) | permission_name |
| ----------------- | --------------- |
| 1                 | edit            |
| 2                 | view            |
| 3                 | comment         |

---

## Database E/R Design

- **Entities:**
  - User, Note, Category, Tag, Attachment, Notebook, Trash, Sharing, Permission
- **Relationships:**
  1. User (1) ------< Note (Many)
  2. User (Many) ------< Category_Note >------ (Many) Category
  3. User (Many) ------< Tag_Note >------ (Many) Tag
  4. Note (1) ------< Attachment (Many)
  5. User (Many) ------< Notebook_Note >------ (Many) Notebook
  6. User (1) ------< Trash (Many) ------< Note (Many)
  7. User (one) ------< Sharing >------ (Many) User
  8. Note (Many) >------ permission (One)

---

## Links

- [**API Documentation**](https://documenter.getpostman.com/view/15074292/2s9YXfcimY#22177e0b-79c1-499f-ad21-a4e7deb0b6cf)
<!-- - [**LIVE Application**](https://xnote.qridwan.com) -->
