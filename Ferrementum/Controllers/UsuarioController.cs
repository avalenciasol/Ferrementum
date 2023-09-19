using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Ferrementum.Models;
using System.Data.SqlClient;
using System.Data;

namespace Ferrementum.Controllers
{
    public class UsuarioController : Controller
    {
        private static string conexion = System.Configuration.ConfigurationManager.ConnectionStrings["cadena"].ToString();

        private static List<Usuario> olista = new List<Usuario>();

        // GET: Usuario
        public ActionResult Inicio()
        {

            olista = new List<Usuario>();

            using (SqlConnection oconexion = new SqlConnection(conexion))
            {
                SqlCommand cmd = new SqlCommand("SELECT * FROM Usuarios", oconexion);
                cmd.CommandType = CommandType.Text;
                oconexion.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        Usuario nuevoUsuario = new Usuario();

                        nuevoUsuario.Num_doc = Convert.ToInt32(dr["Num_doc"]);
                        nuevoUsuario.Nombre = dr["Nombre_us"].ToString();
                        nuevoUsuario.Apellido = dr["Apellido_us"].ToString();
                        nuevoUsuario.Contrasena = dr["Contraseña"].ToString();
                        nuevoUsuario.Correo = dr["Correo"].ToString();
                        nuevoUsuario.Ciudad = dr["Ciudad"].ToString(); 
                        olista.Add(nuevoUsuario);
                    }
                }
            }

            return View(olista);
        }

        public ActionResult Registrar()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Registrar(Usuario ousuario)
        {

            using (SqlConnection oconexion = new SqlConnection(conexion))
            {
                SqlCommand cmd = new SqlCommand("us_Registrar", oconexion);
                cmd.Parameters.AddWithValue("Num_doc", ousuario.Num_doc);
                cmd.Parameters.AddWithValue("Nombre_us", ousuario.Nombre);
                cmd.Parameters.AddWithValue("Apellido_us", ousuario.Apellido);
                cmd.Parameters.AddWithValue("Contraseña", ousuario.Contrasena);
                cmd.Parameters.AddWithValue("Correo", ousuario.Correo);
                cmd.Parameters.AddWithValue("Ciudad", ousuario.Ciudad);
                cmd.CommandType = CommandType.StoredProcedure;
                oconexion.Open();
                cmd.ExecuteNonQuery();
            }

            return RedirectToAction("Inicio","Usuario");
        }
    }
}