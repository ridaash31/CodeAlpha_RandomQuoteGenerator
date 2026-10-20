import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { QUOTES, Quote } from './quotes';

/** Pick a random quote that is never the same as `previous`. */
function pickQuote(previous: Quote | null): Quote {
  if (QUOTES.length === 1) return QUOTES[0];
  let next: Quote;
  do {
    next = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  } while (previous !== null && next.text === previous.text);
  return next;
}

export default function App() {
  // A fresh random quote is chosen every time the app opens.
  const [quote, setQuote] = useState<Quote>(() => pickQuote(null));
  const [count, setCount] = useState(1);

  const newQuote = useCallback(() => {
    setQuote((q) => pickQuote(q));
    setCount((c) => c + 1);
  }, []);

  useEffect(() => {
    // Keyboard shortcut on web: Space or Enter fetches a new quote.
    if (typeof document === 'undefined') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        newQuote();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [newQuote]);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.body}>
        <Text style={styles.mark} accessible={false}>“</Text>
        <Text style={styles.quote} accessibilityRole="text" testID="quote-text">
          {quote.text}
        </Text>
        <Text style={styles.author} testID="quote-author">{quote.author}</Text>
      </View>
      <View style={styles.footer}>
        <Pressable
          onPress={newQuote}
          accessibilityRole="button"
          accessibilityLabel="New Quote"
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        >
          <Text style={styles.buttonText}>New Quote</Text>
        </Pressable>
        <Text style={styles.count}>Quotes viewed this session: {count}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#1B1F3B', alignItems: 'center' },
  body: { flex: 1, justifyContent: 'center', paddingHorizontal: 28, maxWidth: 680, width: '100%' },
  mark: { fontSize: 96, lineHeight: 96, color: '#F2B84B', fontWeight: '800' },
  quote: { fontSize: 30, lineHeight: 42, color: '#F5F3EE', fontWeight: '600' },
  author: { marginTop: 24, fontSize: 18, color: '#F2B84B', fontWeight: '700' },
  footer: { width: '100%', maxWidth: 680, paddingHorizontal: 28, paddingBottom: 32 },
  button: { backgroundColor: '#F2B84B', borderRadius: 14, paddingVertical: 16, alignItems: 'center' },
  buttonText: { color: '#1B1F3B', fontSize: 17, fontWeight: '800' },
  count: { marginTop: 14, textAlign: 'center', color: '#9AA0C4', fontSize: 13 },
});
