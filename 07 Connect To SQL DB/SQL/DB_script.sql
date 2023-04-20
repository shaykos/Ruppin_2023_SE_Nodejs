--יצירת מסד הנתונים
create database Legends
go

use Legends
go

--יצירת טבלה
create table HerosAndVillains(
	id int identity(1,1) primary key,
	nickname nvarchar(max),
	first_name nvarchar(max),
	last_name nvarchar(max),
	abilities nvarchar(max),
	is_hero bit default 1
)
go

--Views יצירת 
create view Heros
as
	select * from HerosAndVillains where is_hero = 1
go

create view Villains
as
	select * from HerosAndVillains where is_hero = 0
go

--יצירת פרוצדורה 
create proc AddCharacter
	@nickname nvarchar(max),
	@first_name nvarchar(max),
	@last_name nvarchar(max),
	@abilities nvarchar(max),
	@is_hero bit = NULL
as
	if(@is_hero is NULL)
		insert into [dbo].[HerosAndVillains]([nickname], [first_name], [last_name], [abilities])
			values(@nickname, @first_name, @last_name , @abilities)
	else
		insert into [dbo].[HerosAndVillains]([nickname], [first_name], [last_name], [abilities], [is_hero])
			values(@nickname, @first_name, @last_name , @abilities, @is_hero)
go

--הפעלת הפרוצדורה
exec AddCharacter @nickname = N'ספיידרמן', @first_name = N'פיטר', @last_name = N'פרקר', @abilities = N'יורה קורים, נצמד לקירות, חוש העכביש, כוח'
go

exec AddCharacter @nickname = N'הגובלין', @first_name = N'נורמן', @last_name = N'אוסבורן', @abilities = N'כוח מופרז, אי שפיות, מדען מטורף', @is_hero = 0
go



