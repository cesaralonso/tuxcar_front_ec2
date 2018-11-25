
    /* SOKCSJS */
    new_status = function(status) {

      // FECHA Y HORA ACTUAL
      const date = new Date();
      const year = date.getFullYear();
      let month = (date.getMonth() + 1).toString();
      month = ((+month < 10) ? '0' : '') + month;
      let day = date.getDate().toString();
      day = ((+day < 10) ? '0' : '') + day;
      let hours = date.getHours().toString();
      hours = ((+hours < 10) ? '0' : '') + hours;
      let minutes = date.getMinutes().toString();
      minutes = ((+minutes < 10) ? '0' : '') + minutes;

      const fecha = `${year}-${month}-${day}`;
      const hora = `${hours}:${minutes}`;

      console.log("status", status);
      if (status === 'connected') {
        const nombre = localStorage.getItem('nombre');
        sock.send(`{"message": "Bienvenido al chat", "username": "${nombre}", "user": {}, "fecha": "${fecha}", "hora": "${hora}" }`);
      }
    }

    on_message = function(e) {

      // Get the content
      var data = JSON.parse(e.data);
      // data = JSON.parse(data);

      if ( data.user !== undefined ) {
          console.log("data.user", data.user);
      } else {
        // NO PERMITE EL CHAT
        return false;
      }
      
      // ES UNA ALERTA
      if (data.tipoalerta_idtipoalerta !== undefined) {

        // SI NO ES PARA ESTE Empleado   
        const idempleado = localStorage.getItem('idempleado');

        if (+idempleado !== +data.empleado_idempleado) {
          return false;
        }

        //  AUMENTA CONTADOR DE NOTIFICACIONES NO LEIDAS
        const element = document.getElementById('totalNoLeidas');
        var totalNoLeidas = element.innerHTML;
        var nuevasNoLeidas = 0;
        nuevasNoLeidas = +totalNoLeidas + 1;
        totalNoLeidas = nuevasNoLeidas.toString();
        document.getElementById('totalNoLeidas').innerHTML = totalNoLeidas;

        var _url = '';
        if (data.tipoalerta_idtipoalerta === 1) {
          
            // ES UNA TAREA
            _url = `/#/pages/empleadotareas/ordentarea/${data.mensaje.split('|')[1]}`;
            data.mensaje = data.mensaje.split('|')[0];
        } else if (data.tipoalerta_idtipoalerta === 3) {

            // ES PARA VEHICULO TALLER
            _url = `/#/pages/vehiculotallers/vehiculo/${data.mensaje.split('|')[1]}`;
            data.mensaje = data.mensaje.split('|')[0];
        } else {
          
          // ES UN AVISO
          _url = `/#/pages/alertas`;
        }
        
        // Mostrar en forma de Alertas    
        const alerta = `
        <a class="clearfix" style="    
              border-top: 1px solid #333;
              padding: 10px 12px;
              display: block;
              text-decoration: none;
              color: #7d7d7d;
              font-size: 12px;"
            href="${_url}">
          <div style="
          display: block;
          float: left;
          width: 36px;
          color: #5cb85c !important" >
            NUEVA
          </div>
          <div style="
          float: right;
          width: 230px;" >
            <div style="color: #5cb85c !important" >${ data.mensaje }</div>
            <span style="
              font-style: italic;
              text-align: right;
              display: block;
              font-size: 11px;
            ">${ data.fecha } ${ data.hora }</span>
          </div>
        </a>`;
        
        document.getElementById('alertas').insertAdjacentHTML('afterbegin', alerta);

      } else {

        if (document.getElementById('chatcontent') !== null) {

          // ES MENSAJE PARA EL CHAT
          const text = `<div style="padding:0px 3px"><small>${data.fecha} ${data.hora}</small>: ${data.username}: <strong> ${data.message} </strong></div><br>`;
          document.getElementById('chatcontent').innerHTML += text;
        }
        
      }
    }

    // var sock = new SockReconnect( `http://test.viemx.com/echo`, null, new_status, on_message);
    var sock = new SockReconnect( `http://34.220.153.206:3000/echo`, null, new_status, on_message);
    if (window.addEventListener) {
      window.addEventListener('load', sock.connect, false);
    } else {
      window.attachEvent('onload', sock.connect);
    }