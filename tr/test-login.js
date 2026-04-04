// Script de prueba para verificar el funcionamiento del login
// Simular localStorage para Node.js
global.localStorage = {
    data: {},
    setItem: function(key, value) { this.data[key] = value; },
    getItem: function(key) { return this.data[key] || null; },
    removeItem: function(key) { delete this.data[key]; }
};

console.log('=== PRUEBA DE REGISTRO Y LOGIN ===');

// Simular registro de usuario
const usuarioTest = {
    nombre: 'Juan Pérez González',
    rut: '12.345.678-9',
    email: 'juan@email.com',
    password: 'MiPassword123',
    sexo: 'masculino',
    telefono: '+56912345678',
    fechaNacimiento: '1990-01-01',
    tipo: 'propietario'
};

// Guardar en localStorage (simulando registro)
localStorage.setItem('usuarioRegistrado', JSON.stringify(usuarioTest));
console.log('Usuario registrado:', usuarioTest);

// Simular diferentes intentos de login
const intentosLogin = [
    { usuario: 'Juan Pérez González', password: 'MiPassword123', esperado: true, descripcion: 'Login con nombre completo' },
    { usuario: 'juan perez', password: 'MiPassword123', esperado: true, descripcion: 'Login con nombre parcial (case insensitive)' },
    { usuario: 'juan@email.com', password: 'MiPassword123', esperado: true, descripcion: 'Login con email' },
    { usuario: '12.345.678-9', password: 'MiPassword123', esperado: true, descripcion: 'Login con RUT' },
    { usuario: 'Juan Pérez González', password: 'WrongPassword', esperado: false, descripcion: 'Contraseña incorrecta' },
    { usuario: 'UsuarioInexistente', password: 'MiPassword123', esperado: false, descripcion: 'Usuario inexistente' }
];

// Función de validación (copiada del login.html)
function validarLogin(usuarioInput, passwordInput) {
    const usuarioRegistradoStr = localStorage.getItem('usuarioRegistrado');

    if (usuarioRegistradoStr) {
        try {
            const usuarioRegistrado = JSON.parse(usuarioRegistradoStr);

            const input = usuarioInput.toLowerCase().trim();
            const nombre = usuarioRegistrado.nombre.toLowerCase();
            const email = usuarioRegistrado.email.toLowerCase();
            const rut = usuarioRegistrado.rut.toLowerCase();

            const usuarioValido = (
                input === nombre ||
                input === email ||
                input === rut ||
                nombre.includes(input)
            );

            return usuarioValido && passwordInput === usuarioRegistrado.password;
        } catch (error) {
            console.error('Error:', error);
            return false;
        }
    }
    return false;
}

// Ejecutar pruebas
intentosLogin.forEach((intento, index) => {
    const resultado = validarLogin(intento.usuario, intento.password);
    const estado = resultado === intento.esperado ? '✅ PASS' : '❌ FAIL';

    console.log(`${index + 1}. ${estado} - ${intento.descripcion}`);
    console.log(`   Input: "${intento.usuario}" / "${intento.password}"`);
    console.log(`   Resultado: ${resultado} (esperado: ${intento.esperado})`);
    console.log('');
});

console.log('=== FIN DE PRUEBA ===');