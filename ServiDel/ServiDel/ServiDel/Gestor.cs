using System;
using System.Collections.Generic;
using System.Text;

namespace ServiDel
{
    public class Gestor:Usuario
    {
        //Propiedades únicas del gestor
        public string NombredeDelivery { get; set; }
        public string NombredeGestor { get; set; }
        public string EmailRespaldo { get; set; }
        public int NumerodeTarjeta { get; set; }



        //Método para actualizacion de perfil
        public void Actualizarperfil()
        {
            Actualizarperfil();

        }
       

        //Método para Promocionar
        public void Promocionar()
        {
            Promocionar();

        }

        //Método para Detallar
        public void Detallar()
        {
            Detallar();

        }


        //Método abstracto realizado para el Inicio de sesión
        public override void Iniciodesesion()
        {
            Console.WriteLine("Ingrese su nombre de usuario gestor");
            NombredeGestor = Console.ReadLine();
            Console.WriteLine("Escriba su  contraseña: ");
            contrasena = Console.ReadLine();

            Console.WriteLine("Ha iniciado sesion como gestor");


        }





        //Método sobreescrito para el registro de gestor





        public override string registrousuario()
        {

            Console.WriteLine("Registro de Usuario Gestor");
            Console.WriteLine("Escriba el Nombre de su Delivery: ");
            NombredeDelivery = Console.ReadLine();
            Console.WriteLine("Escriba su Nombre de gestor: ");
            NombredeGestor = Console.ReadLine();
            Console.WriteLine("Escriba su email: ");
            email = Console.ReadLine();
            Console.WriteLine("Escriba su nombre de email de respaldo: ");
            EmailRespaldo = Console.ReadLine();
            Console.WriteLine("Escriba su contraseña: ");
            contrasena = Console.ReadLine();
            do
            {
                Console.WriteLine("Confirme su contraseña: ");
                confirmarcontrasena = Console.ReadLine();
                if (contrasena != confirmarcontrasena)
                {
                    Console.WriteLine("Contraseñas no coinciden");
                }

            }
            while (contrasena != confirmarcontrasena);
            return "El gestor ha sido registrado";
        }

    }
}
