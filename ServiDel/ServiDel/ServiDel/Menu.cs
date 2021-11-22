using System;
using System.Collections.Generic;
using System.Text;

namespace ServiDel
{
    class Menu
    {
        private int op;
        private int inicio;



        Cliente cliente1 = new Cliente();
        Gestor gestor1 = new Gestor();

        public void Mostrar()
        {
            Console.WriteLine("1. Iniciar sesion como Cliente");
            Console.WriteLine("2. Iniciar sesion como Gestor");

            Console.WriteLine("3. Registro Como Cliente");
            Console.WriteLine("4. Registro Como Gestor");

            op = int.Parse(Console.ReadLine());

            if (op < 1 || op > 5)
            {
                Console.WriteLine("La opcion ingresada no es valida");
                Console.ReadKey();

   

            }

            switch (op)
            {
                case 1:

                    cliente1.Iniciodesesion();

                    break;

                case 2:

                    gestor1.Iniciodesesion();

                    break;



                case 3:

                    cliente1.registrousuario();

                    break;

                case 4:

                    gestor1.registrousuario();

                    break;



            }

           

            





            }

    }
}
