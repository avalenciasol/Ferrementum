using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ferrementum.Models
{
    public class Usuario
    {
        public int Num_doc { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Contrasena { get; set; }
        public string Correo { get; set; }
        public string Ciudad { get; set; }

    }
}