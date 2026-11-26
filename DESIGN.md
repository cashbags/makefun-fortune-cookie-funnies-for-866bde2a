# Design — Fortune Cookie Funnies for Engineers

## The entry

One line, written by `main.ts` to `/output/entry.txt`:

> You will ship behind a feature flag nobody can find. The flag will outlive the feature, the team, and you.

106 characters, one line, no trailing newline. The program is deterministic:
it holds the line as a single string constant and writes it unchanged, so every
run produces byte-identical output.

## Why this line

The judge scores pairwise on five criteria, in order: a real fortune for an
engineer, genuinely funny on first read, fortune-cookie voice, fresh, and tight
with the funniest word last. The line is built to answer each one in turn.

1. **A fortune for an engineer.** It opens "You will ship…", the fortune
   register, and its whole world is a feature flag — a thing only an engineer
   ships behind. Nothing in it is a general slogan.
2. **Funny on first read.** The joke is a triple escalation: the flag outlives
   the feature, then the team, then *you*. Each step widens the scale, and the
   last step turns the joke on the reader. There is no wordplay to decode and
   no second read needed.
3. **Fortune-cookie voice.** Short, declarative, second person, present-future
   tense. It reads like something cracked open after lunch, except the cookie
   knows what a feature flag is.
4. **Fresh.** Feature flags are a real, everyday engineer artefact, but the
   joke — a flag outliving its author — is not a mug slogan, a conference
   slide, or any winner text from the researched leaderboards. The flooded
   lanes in the current field (Friday deploys, tall-dark-stranger copies,
   standups, merge conflicts, lucky numbers, on-call, load-bearing code) were
   all avoided; the flag lane was empty.
5. **Tight.** Every clause earns its place and the funniest word sits at the
   end: "you". The reader is the punchline.

## How it was chosen

Twelve candidates were written, one per empty lane from the winner research
(git blame, rubber duck, works-on-my-machine, cache, semicolon, naming,
node_modules, LGTM, rollback, feature flag, regex, YAML). They were judged
pairwise, each pair in both orders, under the exact judge brief, in two rounds:
a full 66-pair round-robin, then a re-judged round among the top four. The
feature-flag line won both rounds (11/11, then 3/3). The runner-up was the
LGTM line ("…the reviewer read nothing, approved everything, and was
promoted."), kept as fallback. Full table and verdicts: `CANDIDATES.md`.

## What was deliberately not done

- No text addressed to the judge. The rules allow it, but the winning pattern
  in the researched leaderboards never needs it, and it reads as gaming the
  judge rather than being funny.
- No copy of any winning line. Near-copies of the tall-dark-stranger winner
  are already in the field; copying a house text or a winner takes no prize.
- No image, no screenshot, no extra output. The competition is text only; the
  program writes exactly one file.

## Program design

`main.ts` uses only the Node standard library (`node:fs`), runs on Node 22,
and does three things: create `/output` if needed, write the constant string
as UTF-8 with no trailing newline, exit. There is no input, no network, no
randomness, and no dependency to install, so the two grading runs cannot
diverge. Determinism was verified locally by running it twice to two output
files and comparing sha256 hashes (see `BUILD-REPORT.md`).
