using Dominio.Dto;
using Dominio.Entiti;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Dominio.Interfaces.Aplicacion.Sectores
{
    public interface IServicioSectores
    {
         Task<List<DtoSectores>> ObtenerSectores();

         Task<List<DtoSectores>> ObtenerSectoresActivos();


         Task<DtoRespuestaSP> InsertarSectores(EntitiSectores entitiSectores);


         Task<DtoRespuestaSP> ActualizarSectores(EntitiSectores entitiSectores);


         Task<DtoSectores> ObtenerSectoresPorID(int idSector);


         Task<DtoRespuestaSP> EliminarSector(int idSector);
    }
}
