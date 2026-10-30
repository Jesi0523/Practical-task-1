// <------------- Código visto en clase ------------->

// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

export default function App() {
  return (
    <View style={styles.screen}>
      {/* TODO STEP 1: build the card with View and Text (name, role, location, bio) */}
      {/* TODO STEP 2: add the banner and the avatar with Image */}
      {/* TODO STEP 3: header row and stats row with Flexbox */}
      {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
      {/* TODO STEP 5: polish the styles (colors, typography, shadow) */}

      {/* <Text>TODO: build the profile card</Text> */}

      <View style={styles.card}>
        <Image
          style={styles.banner}
          resizeMode='cover'
          source={require('./assets/banner.png')}
        />
        <View styles={styles.body}>
          <View style={styles.headerRow}>
            <Image
              style={styles.avatar}
              source={require('./assets/avatar.png')}
            />
            <View style={styles.onlineBadge}></View>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.name}>Paola García</Text>
            <Text style={styles.rol}>Software Developer Student</Text>
            <Text style={styles.location}>Nuevo León, México</Text>
            <Text style={styles.bio} numberOfLines={3}>
              {BIO}
            </Text>
          </View>
          <View style={styles.statsRow}>
            {STATS.map((item, index) => (
              <View
                key={item.label}
                style={[
                  styles.stats,
                  index - STATS.length - 1 && styles.statsDivider,
                ]}
              >
                <Text style={styles.statsValue}>{item.value}</Text>
                <Text style={styles.statsLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
          <View style={styles.tags}>
            {SKILLS.map((skill) => (
              <View key={skill} style={styles.tag}>
                <Text style={styles.tagText}></Text>
              </View>
            ))}
          </View>
          <View style={styles.actions}>
            <View style={[styles.button, styles.buttonPrimary]}>Follow</View>
            <View style={styles.button}>Message</View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    backgroundColor: '#EEF1F6',
  },
  onlineBadge: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#22C55E',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
});
