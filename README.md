# **Note Taking Application, Backend Service (XNote)**

Digital platform that allows users to create, manage, and organize text-based notes. It provides users with the ability to create, edit, categorize, and search for notes, making it easy to capture and retrieve information efficiently. 

**2. Features:**

- User Registration and Login:
    - Users can create accounts and log in securely.
- Create and Edit Notes:
    - Users can create new text-based notes.
    - Notes can be edited and updated as needed.
- Note Organization:
    - Users can organize their notes into notebooks or folders.
    - Notes can have tags for easy categorization.
- Attachments:
    - Users can attach files (e.g., images, documents) to their notes.
- Trash and Recovery:
    - Deleted notes are moved to the trash and can be recovered.
- Sharing:
    - Users can share notes with others.
    - Collaborative note editing and commenting.

3. Data Requirements:

**Users:**

- User ID (Primary Key)
- Username
- Email
- Password

Example:

| userID (PK) | username | email | password |
| --- | --- | --- | --- |
| 101 | ridwan | mail@qridwan.com | ridwan123 |
| 102 | asad | mail@asad.com | asad123 |

**Notes:**

- Note ID (Primary Key)
- User ID (Foreign Key)
- Note Title
- Note Content
- Creation Timestamp
- Update Timestamp

Example:

| noteID (PK) | userID (FK) | note_title | content | created_at | updated_at |
| --- | --- | --- | --- | --- | --- |
| 1 | 101 | title 1 | content1 | timezone | timezone |
| 2 | 101 | title 2 | content2 | timezone | timezone |
| 3 | 102 | title 3 | content3 | timezone | timezone |

**Categories:**

- Category ID (Primary Key)
- User ID (Foreign Key)
- Category Name

Example data for the "Categories" table:

| categoryID (PK) | userID (FK) | category_name |
| --- | --- | --- |
| 1 | 101 | Work |
| 2 | 101 | Personal |

**Tags:**

- Tag ID (Primary Key)
- User ID (Foreign Key)
- Tag Name

Example data for the "Tags" table:

| tagID (PK) | userID (FK) | tag_name |
| --- | --- | --- |
| 1 | 101 | Important |
| 2 | 101 | Travel |

**Attachments:**

- Attachment ID (Primary Key)
- Note ID (Foreign Key)
- Attachment File Name
- Attachment File Type
- Attachment File Path

| attID (PK) | noteID (FK) | att_filename | att_fitetype | att_file_path |
| --- | --- | --- | --- | --- |
| 1 | 1 | note1 | png | work/note1.png |
|  |  |  |  |  |

**Notebooks:**

- Notebook ID (Primary Key)
- User ID (Foreign Key)
- Notebook Name
- note id

| notebookID | userID | notebook_name | note_id |
| --- | --- | --- | --- |
| 1 | 101 | book1 | 2 |
|  |  |  |  |

**Trash:**

- Trash ID (Primary Key)
- User ID (Foreign Key)
- Deleted Note ID (Foreign Key)
- Deletion Timestamp

| trashID (PK) | userID (FK | noteID (FK) | timestamp |
| --- | --- | --- | --- |
| 1 | 101 | 2 | 12/08/2023… |
|  |  |  |  |

**Sharing:**

- Sharing ID (Primary Key)
- Note ID (Foreign Key)
- Shared User ID (Foreign Key)
- Sharing Permissions

| sharingID (PK) | noteID (FK) | sharedUserID (FK) | permissionID (FK) |
| --- | --- | --- | --- |
|  |  |  |  |
| abc01 | 2 | 101 | 1 |

**Permission:**

- permission ID (Primary key)
- permission name

| permissionID (PK) | permission_name |
| --- | --- |
| 1 | edit |
| 2 | view |
| 3 | comment |

**D. E/R Design for the Database:**

Here's a simplified E/R diagram for the Note-Taking Application:

- **Entities:**
    1. User
    2. Note
    3. Category
    4. Tag
    5. Attachment
    6. Notebook
    7. Trash
    8. Sharing
    9. Permission

**Relationships:**

1. User creates Note (One-to-Many)
    - User (1) ------< Note (Many)
2. User organizes Note into Category (Many-to-Many)
    - User (Many) ------< Category_Note >------ (Many) Category
3. User assigns Tag to Note (Many-to-Many)
    - User (Many) ------< Tag_Note >------ (Many) Tag
4. Note contains Attachment (One-to-Many)
    - Note (1) ------< Attachment (Many)
5. User organizes Note into Notebook (Many-to-Many)
    - User (Many) ------< Notebook_Note >------ (Many) Notebook
6. User deletes Note to Trash (One-to-Many)
    - User (1) ------< Trash (Many) ------< Note (Many)
7. User shares Note with other User (Many-to-Many)
    - User (one) ------< Sharing >------ (Many) User
8. Sharable note only have one permission (Many-to-One)
    - Note (Many) >------ permission (One)
