const accesos = [
	{
		'nombre': 'Iniciar Sesión',
		'referencia': `auth/inicio_sesion/`
	},
	{
		'nombre': 'Registrar',
		'referencia': `auth/registro/`
	}
];

const main = async() => {
	dibujarNavBar(accesos);
	await tieneJWT();
}

main();