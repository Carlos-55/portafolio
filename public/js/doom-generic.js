const fisrOnload = () => {
    const year = new Date().getFullYear();
    document.getElementById('copy').innerHTML = '&copy; ' + year + '  Carlos Bayardo. Todos los derechos reservados.';



    const carousel = document.getElementById('carousel');

    if (carousel) {
        const images = [
            'Angular.png',
            'aws.png',
            'Dart.png',
            'flutter.png',
            'gcp.png',
            'java.png',
            'nestjs.png',
            'nginx.png',
            'nodejs.png',
            'quasar.svg',
            'React.png',
            'Tailwind.png',
            'Vue.png',
            'ExpressJS.png',
            'mongo.png',
            'postgresql.png',
            'Mysql.png',
        ];
        images.forEach(image => {
            const div = document.createElement('div');
            // agrega un tooltip al div con el nombre de la imagen
            div.className = 'carousel-item';
            const img = document.createElement('img');
            img.src = `public/img/${image}`;
            img.alt = `Imagen de ${image}`;
            img.className = 'w-full h-full object-cover';
            div.appendChild(img);
            carousel.appendChild(div);
        });

        // Verifica que haya elementos en el carrusel para iniciar la animación
        if (carousel.querySelector('.carousel-item')) {
            setInterval(() => {
                const firstElement = carousel.querySelector('.carousel-item');
                if (firstElement) {
                    const clone = firstElement.cloneNode(true);
                    clone.style.opacity = '1';
                    carousel.appendChild(clone);
                    firstElement.style.opacity = '0';
                    firstElement.style.width = '0px'; // Hace que el elemento se encoja
                    setTimeout(() => {
                        firstElement.remove();
                    }, 1000); // Espera 1000ms (1 segundo)
                }
            }, 2000); // Intervalo más corto para desapariciones más frecuentes (cada 1.5 segundos)
        }

    }
   
    const projectsList = document.getElementById('project-list');
    if (!projectsList) {
        console.error("Error: Element with ID 'projects-list' not found in the DOM.");
        return; // Salir de la función si el elemento no existe
    }
    const projects = [
        {
            name: 'Domingo santo', description: `Plataforma para inventarios, menú de restaurantes y promocionales.
            En conjunto con un sistema de asignacion de mesas para los clientes, se generaban de igual forma subida de tickets para seguimientos de ventas y compras,
            así como una inclusion de catalogos para abastecimiento de productos y servicios.
            <p>Se implemento un sistema de membresias que permite a los clientes acceder a descuentos y promociones exclusivas,
                creditos para compras y automatización para pagos recurrentes.
            </p>
            `},
        {
            name: 'Clinica SHEN', description: `
            Plataforma completa para administración de citas, seguimientos medicos y expedición de recetas, 
            este proyecto fue realizado desde 0 basandonos en manejo de roles, 
            mejoras continuas y de igual forma llevando un seguimiento por parte de la 
            aplicación para los pacientes, 
            incluye un chat en tiempo real para doctores y recepcionistas.
            
            <br><ul>
            <li>- Gestión de citas</li>
            <li>- Seguimiento de pacientes</li>
            <li>- Gestión de recetas</li>
            <li>- Chat en tiempo real</li>
            <li>- Panel administrativo</li>
            <li>- Autenticación de usuario</li>
            <li>- Aplicación Móvil</li>
            <li>- Aplicación Web</li>
            <li>- Gestor de horarios</li>
            <li>- Gestión de roles</li>
            <li>- Gestión de permisos</li>
            </ul>
            `
        },
        {
            name: 'Francomotors', description:
                '<p>Plataforma de inventario de compra y ventas de vehículos, con un sistema de gestión de clientes y ventas. Este proyecto fue realizado desde 0, incluyendo un sistema de gestión de inventario, seguimiento de clientes y ventas, y un panel administrativo para la gestión de todo el proceso.'
                + 'Cuenta con diferentes roles de usuario, incluyendo gerente, vendedor, mecanico y un BackOffice para la administracion de todas las sucursales, este sistema fue realizado con el fin de llevar un control de las ventas y compras de vehículos, así como un seguimiento de los clientes y sus necesidades.'
                + 'Este ecosistema incluye de igual forma una analitica completa que permite a los administradores y gerentes tomar decisiones informadas sobre el negocio, incluyendo un sistema de reportes y analiticas que permite ver el rendimiento de las ventas, compras y clientes.</p>'
                + '<br><ul>'
                + '<li>- Analitica </li>'
                + '<li>- Seguimiento de clientes</li>'
                + '<li>- Seguimiento de ventas</li>'
                + '<li>- Seguimiento de compras</li>'
                + '<li>- Notificaciones en tiempo real</li>'
                + '<li>- Panel administrativo</li> </ul>'

        },
        {
            name: 'E-Trams (Checklist)', description: `
            Paginá completamente dinamica para el manejo y gestion de pedidos, conciliacion y hacercamiento con la plataforma E-Trams, esta encargada de gestionar almacenes.
            <br><ul>
            <li>- Gestion de pedidos</li>
            <li>- Conciliacion de pedidos</li>
            <li>- Gestion de almacenes</li>
            <li>- Autenticación de usuario</li>
            </ul>
            ` },
        {
            name: 'E-Tae', description: `
            Ecosistema de ventas y recargas de chips de telefonía móvil.
            Plataforma de tipo SaaS que fue diseñanda e implementada para la administración de inventarios de chips,
            recargas y ventas de chips de telefonía móvil, este sistema fue realizado con el fin de llevar un control de las ventas y compras de chips, así como un seguimiento de los clientes y sus necesidades.
            <p>Este proyecto nace de la necesidad de varios clientes de poder tener una seguridad plena de sus ventas así como una conciliación con cada uno de sus colaboradores, la plataforma cuenta con seguimiento y asignación de 
            chips, asignación de rutas para los vendedores, roles y pemisos, incluyendo una aplicación móvil con varias caracteristicas que se describen a continuacion: </p>
            
            <br>
            <p>Características de la plataforma web para gestión:</p>
            <ul>
            <li>- Seguimiento de ventas</li>
            <li>- Carga masiva de chips (IMEI, Serie, número de teléfono)</li>
            <li>- Asignación de chips a vendedores</li>
            <li>- Asignación de rutas para vendedores</li>
            <li>- Autenticación de usuario</li>
            <li>- Panel administrativo</li>
            <li>- Gestión de roles</li>
            <li>- Gestión de permisos</li>
            <li>- Geolocalización de puntos de venta (Usando coordenadas para saber en donde se recargaron los chips)</li>
            <li>- Integración con API de recargas (Dependiendo las necesidades del cliente)</li>
            <li>- Marca blanca (Posibilidad de personalizar la plataforma con el logo y colores del cliente)</li>
            </ul> 

            <br>
            <p>Características de la aplicación móvil para vendedores:</p>
            <ul>
            <li>- Autenticación de usuario</li>
            <li>- Visualización de chips asignados</li>
            <li>- Visualización de rutas asignadas</li>
            <li>- Lectura de código de barras y QR para recargas</li>
            <li>- Registro de recargas realizadas</li>
            </ul>
            
            <p>Una vez sabiendo las caracteristicas de las plataformas que se ofrecen de cara al cliente y al vendedor, se puede ver que la plataforma es completamente escalable y adaptable a las necesidades de cada cliente, permitiendo una personalización completa de la plataforma y una integración con diferentes APIs de recargas.</p>
            <p>Ahora el propietario del proyecto tiene el control total de todas las empresas que se encuentran dentro de la plataforma, permitiendo una gestión completa de las ventas y compras de chips, así como un seguimiento de los clientes y sus necesidades por si existe algun percanse
            desde esta plataforma puede ingresar y dar de alta nuevos clientes, activar o desactivar sus cuentas así como poder agregar su porpia marca blanca, permitiendo una personalización completa de la plataforma y una integración con diferentes APIs de recargas.</p>
            `  }
    ];
    projects.forEach((project, index) => {
        const li = document.createElement('li');
        li.className = 'bg-gray-200 p-4 rounded shadow';
        if (index % 2 == 0) {
            li.setAttribute('data-aos', 'fade-right');
        } else {
            li.setAttribute('data-aos', 'fade-left');
        }
        li.innerHTML = `<h3 class="font-semibold">${project.name}</h3><p>${project.description}</p>`;
        projectsList.appendChild(li);
    });


}

window.addEventListener('load', fisrOnload);