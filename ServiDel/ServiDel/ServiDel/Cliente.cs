using System;
using System.Collections.Generic;
using System.Text;

namespace ServiDel
{
    public class Cliente : Usuario
    {

        //Propiedades únicas del cliente
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string NombredeUsuario { get; set; }




        //Método para actualizacion de perrfil
        public void Actualizarperfil()
        {
            Actualizarperfil();

        }
        
        

        //Método abstracto realizado para el Inicio de sesión
        public override  void Iniciodesesion()
        {
            Console.WriteLine("Ingrese su nombre de usuario cliente");
            NombredeUsuario= Console.ReadLine();
            Console.WriteLine("Escriba su  contraseña: ");
            contrasena = Console.ReadLine();

            Console.WriteLine("Ha iniciado sesion como cliente");

            
        }


        //Método sobreescrito para el registro de cliente
        public override string registrousuario()
        {
            Console.WriteLine("Registro de Usuario Cliente");
            Console.WriteLine("Escriba su Nombre: ");
            Nombre = Console.ReadLine();
            Console.WriteLine("Escriba su Apellido: ");
            Apellido = Console.ReadLine();
            Console.WriteLine("Escriba su Nombre de Usuario: ");
            NombredeUsuario = Console.ReadLine();
            Console.WriteLine("Escriba su Email: ");
            email = Console.ReadLine();
            Console.WriteLine("Escriba su  contraseña: ");
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

            return "El cliente ha sido registrado";


            
        }

    }


}
