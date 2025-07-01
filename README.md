# Uma Bot

This Discord bot allows users to bet on League of Legends soloqueue games
using "monies". 

## Event Flow
When no parlays are active, any user can start one by using 
``
/parlay (SummonerName#Tag) (Category) (+|- Wager)
``
Once at least one other user enters a parlay of the same game and category and bets against the first user, the parlay becomes active. If nobody else enters an opposing parlay before the game ends, the parlay is cancelled. 

Each parlay category corresponds to a different stat of an uma:

***
### Personal Stats

**Outcome (Outcome):** Wit++, Speed, Power, Monies++

**Total Personal Kills (Kills):** Speed, Power++

**Total CS (CS):** Power and Stamina

**CS per minute (CSPM):** Stamina+

**KDA (KDA):** Wit, Speed

**First Blood (FB):** Monies+++, Speed++

**First Tower (FT):** Monies+++, Power, Wit

### Team Stats

**Dragon Soul (Soul):**
* Infernal: Speed, Power
* Mountain: Stamina, Guts
* Hextech: Speed, Wit
* Cloud: Speed++
* Chemtech: Stamina++

**Atakhan (Atakhan|Akshan):** Speed, Power, Stamina, Monies++

**Baron Count (Barons):** Speed, Power, Guts++

**Total Kills (TKills):** Speed, Power++

**First Blood (TFB):** Monies++, Speed

**First Tower (TFT):** Monies++, Power, Wit

**Towers Taken (TTT):** Power, Stamina
***

Every category grants a default base amount of monies but some are especially lucrative. 

For now, the first user who starts a parlay on a numerical category sets the wager and everyone else has to bet with or against it. The house doesn't exist yet.

At the end of a season (configurable), all trained umas will race against each other. 

## Commands

### Parlay
```
/parlay (SummonerName#Tag) (Category) (+|-Wager)
```
* Some categories only take boolean value wagers, such as Outcome, FirstBlood, FirstTower, Soul
* Some categories take decimal value wagers, such as KDA and CSPM

### View Odds
```
/odds (SummonerName#Tag) (Category)
```
* For now, over/under will be a simple ratio of people betting for or against a wager

###  Name an Uma
```
/name (Uma ID) (Name)
```

### View Uma Stats
```
/view [(Uma ID|Name)]
```
* If multiple umas have the same name, all of the ones with the same name will be shown
* If no field is passed, the stats of the currently active uma will be shown
* If an asterisk (*) is passed as the only field ``/view *``, the stats of all of the ***user's*** umas will be shown
* For now, a player can only have one active uma per season and she will be retired at the end of the season. No inheritance yet 
