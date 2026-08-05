import { StyleSheet } from 'react-native';

// Estilos separados para el componente App.
// Cada clave corresponde a un estilo usado en App.js.
export default StyleSheet.create({
  // Estilo del contenedor principal de la pantalla.
  screen: {
    flex: 1,
    backgroundColor: '#f3f8f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  // Estilo de la tarjeta de perfil con borde, sombra y padding.
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#73a96b',
    paddingVertical: 36,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },

  // Wrapper para separar el avatar del resto de la tarjeta.
  avatarWrapper: {
    marginBottom: 24,
  },

  // Estilo del círculo verde que contiene el avatar.
  avatarBackground: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#327832',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  // Estilo de la imagen del avatar.
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  // Estilo del nombre dentro de la tarjeta.
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1c421f',
    marginBottom: 6,
  },

  // Estilo del subtítulo debajo del nombre.
  subtitle: {
    fontSize: 16,
    color: '#5f7761',
    marginBottom: 28,
  },

  // Estilo del contenedor de los botones.
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },

  // Estilo de cada botón.
  button: {
    flex: 1,
    backgroundColor: '#327832',
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: 'center',
  },

  // Estilo del botón cuando está presionado.
  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  // Estilo del texto dentro de los botones.
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
