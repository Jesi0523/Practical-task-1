// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

const COLORS = {
  background: '#eef1f6',
  card: '#ffffff',
  text: '#1b1f2a',
  muted: 'gray',
  primary: '#2f6fed',
  'primary-light': '#e6eeff',
  border: '#e5e7eb',
  online: '#22C55E',
};

// Reusable components

function StatItem({ label, value }) {
  // Para el estilo de los bordes
  const isNotLast = label !== STATS[STATS.length - 1].label;

  return (
    <View style={[styles.stats, isNotLast && styles.statsDivider]}>
      <Text style={styles.statsValue}>{value}</Text>
      <Text style={styles.statsLabel}>{label}</Text>
    </View>
  );
}

function Tag({ label }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

export default function App() {
  // Dimensions
  const { width } = useWindowDimensions();
  const isWideScreen = width > 600;

  return (
    <View style={styles.screen}>
      {/* TODO STEP 1: build the card with View and Text (name, role, location, bio) */}
      {/* TODO STEP 2: add the banner and the avatar with Image */}
      {/* TODO STEP 3: header row and stats row with Flexbox */}
      {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
      {/* TODO STEP 5: polish the styles (colors, typography, shadow) */}

      {/* <Text>TODO: build the profile card</Text> */}

      <View style={[styles.card, isWideScreen && styles.cardWidth]}>
        <Image
          style={styles.banner}
          resizeMode='cover'
          source={require('./assets/banner.png')}
        />
        <View style={styles.body}>
          <View style={styles.headerRow}>
            <View style={styles.avatarContainer}>
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
            </View>
          </View>
          <Text style={styles.bio} numberOfLines={3}>
            {BIO}
          </Text>
          <View style={styles.statsRow}>
            {STATS.map((item) => (
              <StatItem
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </View>
          <View style={styles.skills}>
            <Text style={styles.textSkills}>Skills</Text>
            <View style={styles.tags}>
              {SKILLS.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </View>
          </View>
          <View style={styles.actions}>
            <View style={[styles.button, styles.buttonPrimary]}>
              <Text style={styles.follow}>Follow</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.message}>Message</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },
  card: {
    borderRadius: 20,
    backgroundColor: COLORS.card,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.text,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  cardWidth: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  banner: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: 120,
  },
  body: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: COLORS.card,
    marginTop: -42,
  },
  onlineBadge: {
    position: 'absolute',
    right: 6,
    bottom: 34,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.online,
    borderWidth: 3,
    borderColor: COLORS.card,
  },
  headerText: {
    flex: 1,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  rol: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: COLORS.muted,
  },
  bio: {
    color: COLORS.text,
    lineHeight: 20,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  statsDivider: {
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
  },
  stats: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  statsValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statsLabel: {
    color: COLORS.muted,
  },
  skills: {
    marginTop: 16,
  },
  textSkills: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  tag: {
    backgroundColor: COLORS['primary-light'],
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  tagText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 14,
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
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
  },
  follow: {
    fontWeight: 'bold',
    color: COLORS.card,
  },
  message: {
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
