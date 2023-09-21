BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) VALUES ('Ezio', 'user@gmail.com', 6, '2023-09-12');
INSERT into login (hash, email) VALUES ('$2a$10$WAK21U0LWl7C//jJ.DOB2uPP1DJQh7KUDgasdyQeGzkop2Pzl8W7u', 'user@gmail.com');



COMMIT;