// Script de prueba para verificar el login en index.html
// Simular localStorage y sessionStorage para Node.js
global.localStorage = {
    data: {},
    setItem: function(key, value) { this.data[key] = value; },
    getItem: function(key) { return this.data[key] || null; },
    removeItem: function(key) { delete this.data[key]; }
};

global.sessionStorage = {
    data: {},
    setItem: function(key, value) { this.data[key] = value; },
    getItem: function(key) { return this.data[key] || null; },
    removeItem: function(key) { delete this.data[key]; }
};

console.log('=== PRUEBA DE LOGIN EN INDEX.HTML ===');

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

// Función de validación (copiada de index.html)
function validarLoginIndex(usuarioInput, passwordInput) {
    const usuarioRegistradoStr = localStorage.getItem('usuarioRegistrado');

    if (usuarioRegistradoStr) {
        try {
            const usuarioRegistrado = JSON.parse(usuarioRegistradoStr);

            const usuarioInputLower = usuarioInput.toLowerCase().trim();
            const nombreRegistrado = usuarioRegistrado.nombre.toLowerCase();
            const emailRegistrado = usuarioRegistrado.email.toLowerCase();
            const rutRegistrado = usuarioRegistrado.rut.toLowerCase();

            const usuarioValido = (
                usuarioInputLower === nombreRegistrado ||
                usuarioInputLower === emailRegistrado ||
                usuarioInputLower === rutRegistrado ||
                nombreRegistrado.includes(usuarioInputLower)
            );

            if (usuarioValido && passwordInput === usuarioRegistrado.password) {
                // Login exitoso - guardar sesión
                sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioRegistrado));
                return { success: true, message: 'Login exitoso' };
            } else {
                return { success: false, message: 'Usuario no encontrado o contraseña incorrecta' };
            }
        } catch (error) {
            console.error('Error al parsear datos del usuario:', error);
            return { success: false, message: 'Error interno' };
        }
    } else {
        return { success: false, message: 'Usuario no encontrado' };
    }
}

// Simular diferentes intentos de login
const intentosLogin = [
    { usuario: 'Juan Pérez González', password: 'MiPassword123', esperado: true, descripcion: 'Login exitoso con nombre completo' },
    { usuario: 'juan@email.com', password: 'MiPassword123', esperado: true, descripcion: 'Login exitoso con email' },
    { usuario: '12.345.678-9', password: 'MiPassword123', esperado: true, descripcion: 'Login exitoso con RUT' },
    { usuario: 'Juan Pérez González', password: 'WrongPassword', esperado: false, descripcion: 'Contraseña incorrecta' },
    { usuario: 'UsuarioInexistente', password: 'MiPassword123', esperado: false, descripcion: 'Usuario inexistente' },
    { usuario: '', password: 'MiPassword123', esperado: false, descripcion: 'Usuario vacío' },
    { usuario: 'juan perez', password: 'MiPassword123', esperado: true, descripcion: 'Login con nombre parcial' }
];

// Ejecutar pruebas
intentosLogin.forEach((intento, index) => {
    const resultado = validarLoginIndex(intento.usuario, intento.password);
    const estado = resultado.success === intento.esperado ? '✅ PASS' : '❌ FAIL';

    console.log(`${index + 1}. ${estado} - ${intento.descripcion}`);
    console.log(`   Input: "${intento.usuario}" / "${intento.password}"`);
    console.log(`   Resultado: ${resultado.success} (esperado: ${intento.esperado})`);
    console.log(`   Mensaje: ${resultado.message}`);
    console.log('');
});

console.log('=== FIN DE PRUEBA ===');