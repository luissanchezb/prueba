using System;
using System.Collections.Generic;
using System.Text;

namespace ServiDel
{

    // Se crea una clase abstracta llamada Usuario la cual heredará a los tipos de usuario que son (Cliente - Gestor)
    public abstract class Usuario
    {
        
        //

        //Propiedades para ambos tipos de usuario
        public string email { get; set;}
        public string contrasena { get; set; }
        public string confirmarcontrasena{ get; set; }


        //Método abstracto realizado para el registro de usuario
        public abstract string registrousuario();

        //Método abstracto realizado para el Inicio de sesión
        public abstract  void Iniciodesesion();



    }
}
