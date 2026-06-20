---
slug: "local-ai-translation-difficulty-length-spanish"
title: "Can Apple's Local LLM Translate Longer Texts?"
description: "Long vs short Harry Potter text local Apple translation test: 'stirring seven times in the opposite direction of the clock hands'"
pubDate: "2026-06-21"
author: "Stimsims"
twitterImage: "./images/ancient_counterclockwise.png"
cover: "./images/ancient_counterclockwise.png"
coverAlt: "Counter clockwise icon"
tags: ['translation', 'LLLM']
published: true
---

## Which is a Longer or Shorter Text Harder to Translate?
I generated a set of Harry Potter themed texts in Spanish. The aim was to test how text length impacted Apple's local LLM's ability to translate well. Surprisingly, the shorter text failed more often, being unable to complete the translation at all. 

Results:
100 words: failed
300 words: success
500 words: success 

#### Predictions by AI: the longer text will be harder due to more complex language features, like sarcasm
I predicted the longer text would be more difficult, because the length of the text would exceed the local LLM's context window. 

Various models of AI made the following predictions:
- context window would be strained with increasing length (Claude, DeepSeek)
- failure to maintain changes in character dialogue (Claude, DeepSeek): they presumed the local LLM would struggle with the difference between Hermione's and Snape's characters, reducing them to one monotonous tone. However, this is a translation task, not a generation task. This was not a problem. 
- cultural references (DeepSeek, Apple Cloud AI, Apple local AI): these AI predicted specific vocabulary and phrases from the Harry Potter universe would not have equivalents in the Apple's local AI, resulting in a loss of nuance. 


#### Result: The Local LLM Failed on the Shorter 100 word text


#### AI Critique of Translation
Both Claude and DeepSeek praised the translation of 'dreamless sleep potion'
Spanish: poción de Sueño Sin Sueños
local Apple: Dreamless Sleep Potion
DeepSeek: Dreamless Sleep Potion
This is spot on — it matches the canonical English name of the potion exactly.

###### DeepSeek Focused on Odd Phrasings to Compensate for Lost Vocabulary
Spanish: remover siete veces en sentido contrario a las agujas del reloj
local Apple: stirring seven times in the opposite direction of the clock hands
DeepSeek: stirring seven times counterclockwise
The local translation is understandable but clunky. “Counterclockwise” is the standard, incantation-like term for potion instructions.

###### Claude and DeepSeek Detected Lost Meaning in Idioms
Spanish: los magos le dieron
Apple Local: "the wizards gave you"
Claude: "you were born with" — "the wizards gave you" sounds like a literal gift from unnamed wizards. The Spanish is a rhetorical construction; the natural English equivalent is "the brain you were born with."

Spanish: No viva de las apariencias
Apple Local: "Don't live by appearances"
Claude: "Don't guess — know." — the idiom is being translated literally. In context, Snape is scolding Leo for hedging with "I think." The translation sounds like advice about vanity, which is jarring.
