using System;
using System.Collections.Generic;
using System.Text;

namespace Dominio.Dto
{
    public class DtoTipoPersona: DatosAuditoria
    {
        public int IdTipoPersona { get; set; }

        public string TipoPersona { get; set; }

    }
}
