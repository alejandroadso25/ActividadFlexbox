// Componente de Expo para controlar el indicador de estado del sistema.
import { StatusBar } from 'expo-status-bar';

// Componentes básicos de React Native para UI táctil y texto.
import { Pressable, Text, View } from 'react-native';

// Estilos separados en un archivo externo.
import styles from './App.styles';

export default function App() {
  // Función llamada cuando se presiona el botón "Seguir".
  // Muestra una alerta del navegador para indicar que la acción se ejecutó.
  const handleFollow = () => alert('Has seguido a Alejandro');

  // Función llamada cuando se presiona el botón "Mensaje".
  // Muestra una alerta del navegador como simulación de la acción.
  const handleMessage = () => alert('Preparando mensaje para Alejandro');

  return (
    // Contenedor principal de la pantalla
    <View style={styles.screen}>
      {/* Tarjeta de perfil con bordes y sombra */}
      <View style={styles.card}>
        {/* Avatar y área superior */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarBackground}>
            <View style={styles.avatarHead} />
            <View style={styles.avatarBody} />
          </View>
        </View>

        {/* Nombre y descripción del perfil */}
        <Text style={styles.name}>Alejandro</Text>
        <Text style={styles.subtitle}>Desarrollador React Native</Text>

        {/* Botones de acción */}
        <View style={styles.actions}>
          <Pressable
            // Estilo dinámico para dar feedback visual cuando se presiona.
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={handleFollow}
          >
            <Text style={styles.buttonText}>Seguir</Text>
          </Pressable>
          <Pressable
            // Estilo dinámico para dar feedback visual cuando se presiona.
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={handleMessage}
          >
            <Text style={styles.buttonText}>Mensaje</Text>
          </Pressable>
        </View>
      </View>

      {/* Barra de estado de Expo */}
      <StatusBar style="auto" />
    </View>
  );
}
