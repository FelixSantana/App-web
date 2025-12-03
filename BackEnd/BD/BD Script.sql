create database estudiantesbd;
use estudiantesbd;
create table estudiante(
    nombre varchar(30),
    matricula varchar(30) primary key,
    promedio double,
    carrera text,
    telefono text,
    direccion text
);
insert into estudiante() values("Wellington Bautista", "100590022",89.50,"Lic. Informatica","829-780-0667","C/D #3 Girasoles ll, Sto. Dgo Oeste, DN");