import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const onLogin = () => {
    // TODO: Wire up real Google auth. For now, this is a visual-only action.
    console.log('Login with Google pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background accents */}
      <View style={styles.bgAccentBig} />
      <View style={styles.bgAccentSmall} />

      {/* Card section */}
      <View style={styles.card}>
        {/* Brand */}
        <View style={styles.brandRow}>
          <Text style={styles.brandLeft}>EV</Text>
          <Ionicons name="leaf" size={22} color="#2ecc71" style={{ marginHorizontal: 4 }} />
          <Text style={styles.brandRight}>STATION</Text>
        </View>

        {/* Hero illustration */}
        <View style={styles.heroWrap}>
          <Image
            source={require('@/assets/images/ev-illustration.png')}
            style={styles.heroImage}
            contentFit="contain"
          />
        </View>

        {/* Title & Subtitle */}
        <View style={styles.textBlock}>
          <Text style={styles.title}>Your Ultimate EV Charging Station Finder App</Text>
          <Text style={styles.subtitle}>
            Find EV charging stations near you, plan trips, and do much more in just one tap.
          </Text>
        </View>
      </View>

      {/* Spacer under the card */}
      <View style={{ height: 16 }} />

      {/* CTA */}
      <Pressable onPress={onLogin} style={({ pressed }) => [styles.ctaButton, pressed && styles.ctaPressed]}>
        <Ionicons name="logo-google" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.ctaText}>Login with Google</Text>
      </Pressable>

      {/* Footer spacing for devices with home indicator */}
      <View style={{ height: Platform.OS === 'ios' ? 12 : 8 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f7f9',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingTop: 28,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  bgAccentBig: {
    position: 'absolute',
    top: -120,
    right: -90,
    width: 220,
    height: 220,
    borderRadius: 200,
    backgroundColor: '#e9f9f0',
  },
  bgAccentSmall: {
    position: 'absolute',
    top: 140,
    left: -60,
    width: 140,
    height: 140,
    borderRadius: 120,
    backgroundColor: '#f1fff7',
  },
  brandRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandLeft: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#111',
  },
  brandRight: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#111',
  },
  heroWrap: {
    width: '100%',
    height: 260,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  textBlock: {
    paddingHorizontal: 6,
    marginTop: 6,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '800',
    color: '#111',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 13.5,
    lineHeight: 20,
    color: '#5f6b6f',
    textAlign: 'center',
    maxWidth: 360,
  },
  ctaButton: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 28,
    width: '85%',
    shadowColor: '#2ecc71',
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  ctaPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
