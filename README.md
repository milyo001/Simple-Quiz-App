A basic quiz application made with ReactJS and .NET 6 Web API

Questions query(TODO: Implement seeding method):
```
USE QuizDb
GO
SET IDENTITY_INSERT [Questions] ON;
GO
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (1, N'What is CLR component in C#?', NULL, 'Engine for helping development proccess', 'Client lumberjack race', 'Convert lame runtimes', 'A react material UI component', 0)
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (2, N'What are the types of memories supported in the .NET framework?', NULL, 'Swag and heat', 'Virtual memory, getter and setter memory', 'Http Memory', 'Stack and Heap', 3)
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (3, N'What is HTML?', NULL, 'Hyper Transport Main Text', 'An object-oriented language', 'Standard markup language for documents', 'Hide Transient Main Text', 2)
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (4, N'What is CSS?', NULL, 'Cascade system sheet', 'A front-end framework', 'A back-end library', 'Style sheet language ', 0)
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (5, N'What is Reflection in C#?', NULL, 'When object is assigned to other object', 'Datatypes metadata extractor during runtime', 'Markup language', 'NuGet Package', 1)
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (6, N'A C# class is...', NULL, 'type-safe function pointer used by the CLI', 'blueprint/template from which objects are created', 'a collection', 'always empty', 1)
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (7, N'What is SPA in web development?', NULL, 'Single pending attribute', 'Singleton pattern axios', 'Single page application', 'Markup language', 2)
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (8, N'What ? stands for in the following example: var a = new A(); if(a?.PropertyOfA != foo)', NULL, 'It does nothing', 'Validate the object if it''s not null', 'throw NullReferenceExeption if null', 'It''s the null conditional operator.', 3)
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (9, N'Where are stored procedures stored?', NULL, 'In some of the ORMs data dictionary', 'In the database data dictionary.', 'In the C# stack', 'In the C# heap', 1)
INSERT [DBO].[Questions] (Id, InWords, ImageName, Option1, Option2, Option3, Option4, Answer) Values (10, N'How many are the types of SQL JOINs', NULL, '(1)Just one JOIN', '(2)INNER and OUTER JOIN ', '(3)LEFT/RIGHT/FULL Join', '(4)INNER, LEFT/RIGHT/FULL OUTER JOIN', 3)
SET IDENTITY_INSERT [Questions] OFF;
GO

```
