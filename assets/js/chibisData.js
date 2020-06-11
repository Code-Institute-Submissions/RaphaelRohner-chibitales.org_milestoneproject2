let chibisArray = [
        {id: 1, name: "Hercules", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 2, name: "Hood", rarity: "Legendary", type: "Chibi", slots: "8", source: "Pack - Genesis", base_juice: "19", base_health: "351", base_dmg: "211", skill: "50% chance to cast Fierce Bubble Pop on up to 3 random enemies", charged_skill: "none"},
        {id: 3, name: "Gramps", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 4, name: "Shadow Fiend", rarity: "Mythic", type: "Chibi", slots: "4", source: "Pack - Genesis", base_juice: "19", base_health: "301", base_dmg: "191", skill: "none", charged_skill: "Cast Fierce Bubble Pop on up to 2 random enemies"},
        {id: 5, name: "Dark Mummy", rarity: "Legendary", type: "Chibi", slots: "8", source: "Pack - Genesis", base_juice: "19", base_health: "351", base_dmg: "211", skill: "none", charged_skill: "Explode up to 4 random enemies"},
        {id: 6, name: "Memes", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 7, name: "Shiney", rarity: "Rare", type: "Chibi", slots: "2", source: "Pack - Genesis", base_juice: "19", base_health: "251", base_dmg: "171", skill: "none", charged_skill: "Tornado, hefty wind gusts hit up to 2 units"},
        {id: 8, name: "Legion", rarity: "Mythic", type: "Chibi", slots: "4", source: "Pack - Genesis", base_juice: "19", base_health: "301", base_dmg: "191", skill: "none", charged_skill: "Small explode up to 3 random enemies"},
        {id: 9, name: "Knuckles", rarity: "Mythic", type: "Chibi", slots: "4", source: "Pack - Genesis", base_juice: "19", base_health: "301", base_dmg: "191", skill: "none", charged_skill: "Tornado, hefty wind gusts hit up to 2 units"},
        {id: 10, name: "Momoy", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 11, name: "Chaac", rarity: "Mythic", type: "Chibi", slots: "4", source: "Pack - Genesis", base_juice: "19", base_health: "301", base_dmg: "191", skill: "none", charged_skill: "Thunderbolt, lightning hits up to 3 enemies"},
        {id: 12, name: "Braggart", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 13, name: "Madam Mim", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 14, name: "Magnus", rarity: "Legendary", type: "Chibi", slots: "8", source: "Pack - Genesis", base_juice: "19", base_health: "351", base_dmg: "211", skill: "none", charged_skill: "Inflict Waterboarding on up to 3 enemies"},
        {id: 15, name: "Centurion", rarity: "Rare", type: "Chibi", slots: "2", source: "Pack - Genesis", base_juice: "19", base_health: "251", base_dmg: "171", skill: "none", charged_skill: "Tornado, hefty wind gusts hit up to 2 units"},
        {id: 16, name: "Merlin", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 17, name: "Abchanchu", rarity: "Legendary", type: "Chibi", slots: "8", source: "Pack - Genesis", base_juice: "19", base_health: "351", base_dmg: "211", skill: "50% chance each round to trigger Burn baby! Set up to 3 enemies on fire", charged_skill: "none"},
        {id: 18, name: "Brabucon", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 19, name: "Felix", rarity: "Mythic", type: "Chibi", slots: "4", source: "Pack - Genesis", base_juice: "19", base_health: "301", base_dmg: "191", skill: "none", charged_skill: "Puff Puff Pass. Engulfes up to 3 enemies in smoke"},
        {id: 20, name: "Blue", rarity: "Rare", type: "Chibi", slots: "2", source: "Pack - Genesis", base_juice: "19", base_health: "251", base_dmg: "171", skill: "none", charged_skill: "Small Thunderbolt, lightning hits up to 2 enemies"},
        {id: 21, name: "Daven", rarity: "Rare", type: "Chibi", slots: "2", source: "Pack - Genesis", base_juice: "19", base_health: "251", base_dmg: "171", skill: "none", charged_skill: "Small Thunderbolt, lightning hits up to 2 enemies"},
        {id: 22, name: "Monk", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 23, name: "Hermit", rarity: "Rare", type: "Chibi", slots: "2", source: "Pack - Genesis", base_juice: "19", base_health: "251", base_dmg: "171", skill: "none", charged_skill: "Puff Ball. Engulfes up to 2 enemies in smoke"},
        {id: 24, name: "Aladdin", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 25, name: "Hermes", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 26, name: "Skully", rarity: "Legendary", type: "Chibi", slots: "8", source: "Pack - Genesis", base_juice: "19", base_health: "351", base_dmg: "211", skill: "none", charged_skill: "Explode up to 4 random enemies"},
        {id: 27, name: "Templar", rarity: "Rare", type: "Chibi", slots: "2", source: "Pack - Genesis", base_juice: "19", base_health: "251", base_dmg: "171", skill: "40% chance to inflict Waterboarding on up to 2 enemies each round", charged_skill: "none"},
        {id: 28, name: "Bitey", rarity: "Legendary", type: "Chibi", slots: "8", source: "Pack - Genesis", base_juice: "19", base_health: "351", base_dmg: "211", skill: "50% chance to cast Fierce Bubble Pop on up to 2 random enemies", charged_skill: "none"},
        {id: 29, name: "OpenSea", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 30, name: "White Death", rarity: "Mythic", type: "Chibi", slots: "4", source: "Pack - Genesis", base_juice: "19", base_health: "301", base_dmg: "191", skill: "none", charged_skill: "Puff Puff Pass. Engulfes up to 3 enemies in smoke"},
        {id: 31, name: "Crimson Ninja", rarity: "Rare", type: "Chibi", slots: "2", source: "Pack - Genesis", base_juice: "19", base_health: "251", base_dmg: "171", skill: "none", charged_skill: "Puff Ball. Engulfes up to 2 enemies in smoke"},
        {id: 32, name: "Gameunculus", rarity: "Common", type: "Chibi", slots: "0", source: "Pack - Genesis", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 33, name: "Noobis", rarity: "Mythic", type: "Chibi", slots: "4", source: "Pack - Genesis", base_juice: "19", base_health: "301", base_dmg: "191", skill: "none", charged_skill: "Burn baby! Set up to 3 enemies on fire"},
        {id: 34, name: "Lizard People", rarity: "Legendary", type: "Chibi", slots: "8", source: "Lottery - Invest", base_juice: "19", base_health: "351", base_dmg: "211", skill: "20% crit chance, 80% chance to poison up to 4 enemies", charged_skill: "none"},
        {id: 35, name: "Lizard Pet", rarity: "Legendary", type: "Chibi", slots: "8", source: "Lottery - Invest", base_juice: "19", base_health: "351", base_dmg: "211", skill: "30% crit chance, 80% chance to bleed up to 4 enemies", charged_skill: "none"},
        {id: 36, name: "Stomper", rarity: "Legendary", type: "Chibi", slots: "8", source: "Lottery - Invest", base_juice: "19", base_health: "351", base_dmg: "211", skill: "50% chance to trigger a group heal, healing up to 30% of the players max health", charged_skill: "none"},
        {id: 37, name: "Minotaur", rarity: "Legendary", type: "Chibi", slots: "8", source: "Lottery - Invest", base_juice: "19", base_health: "351", base_dmg: "211", skill: "20% crit chance, 80% chance to stun up to 4 enemies", charged_skill: "none"},
        {id: 38, name: "Squid Avatar", rarity: "Legendary", type: "Chibi", slots: "8", source: "Lottery - Invest", base_juice: "19", base_health: "351", base_dmg: "211", skill: "none", charged_skill: "Blows poison kisses at up to 3 targets"}, 
        {id: 39, name: "Glen Weyl", rarity: "Legendary", type: "Chibi", slots: "8", source: "Lottery - Invest", base_juice: "19", base_health: "351", base_dmg: "211", skill: "none", charged_skill: "Hands out nasty paper cuts to up to 4 foes"},
        {id: 40, name: "Brenna Sparks", rarity: "Legendary", type: "Chibi", slots: "8", source: "Lottery - Invest", base_juice: "19", base_health: "351", base_dmg: "211", skill: "none", charged_skill: "Stuns up to 4 foes with her sexy looks"},
        {id: 41, name: "Pumpkin Head", rarity: "Legendary", type: "Chibi", slots: "8", source: "Lottery - Invest", base_juice: "19", base_health: "351", base_dmg: "211", skill: "none", charged_skill: "none"},
        {id: 42, name: "Frankie", rarity: "Legendary", type: "Chibi", slots: "8", source: "Lottery - Invest", base_juice: "19", base_health: "351", base_dmg: "211", skill: "none", charged_skill: "Inflict Electrified Waterboarding on up to 4 enemies. Target hit by Electrified Waterboarding receives 40% more damage with 100% crit chance increase on each hit"},
        {id: 43, name: "Cloth Socks", rarity: "Common", type: "Feet", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 44, name: "Cloth Jacket", rarity: "Common", type: "Chest", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 45, name: "Cloth Pants", rarity: "Common", type: "Legs", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 46, name: "Cloth Hat", rarity: "Common", type: "Head", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 47, name: "Cloth Gloves", rarity: "Common", type: "Hands", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 48, name: "Leather Boots", rarity: "Rare", type: "Feet", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "101", base_dmg: "0", skill: "5% crit chance", charged_skill: "none"},
        {id: 49, name: "Leather Jacket", rarity: "Rare", type: "Chest", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "101", base_dmg: "0", skill: "5% bonus on total health", charged_skill: "none"},
        {id: 50, name: "Leather Legs", rarity: "Rare", type: "Legs", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "101", base_dmg: "0", skill: "20% bleed protection", charged_skill: "none"},
        {id: 51, name: "Leather Helmet", rarity: "Rare", type: "Head", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "101", base_dmg: "0", skill: "20% stun protection", charged_skill: "none"},
        {id: 52, name: "Leather Gloves", rarity: "Rare", type: "Hands", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "101", base_dmg: "0", skill: "20% poison protection", charged_skill: "none"},
        {id: 53, name: "Metal Boots", rarity: "Mythic", type: "Feet", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "201", base_dmg: "0", skill: "10% crit chance", charged_skill: "none"},
        {id: 54, name: "Metal Armor", rarity: "Mythic", type: "Chest", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "201", base_dmg: "0", skill: "8% bonus on total health", charged_skill: "none"},
        {id: 55, name: "Metal Legs", rarity: "Mythic", type: "Legs", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "201", base_dmg: "0", skill: "30% bleed protection", charged_skill: "none"},
        {id: 56, name: "Metal Helmet", rarity: "Mythic", type: "Head", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "201", base_dmg: "0", skill: "30% stun protection", charged_skill: "none"},
        {id: 57, name: "Metal Gloves", rarity: "Mythic", type: "Hands", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "201", base_dmg: "0", skill: "30% poison protection", charged_skill: "none"},
        {id: 58, name: "Bandana", rarity: "Legendary", type: "Head", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "x1.5 on total crit and dodge chance", charged_skill: "none"},
        {id: 59, name: "Leather Bandana", rarity: "Legendary", type: "Head", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "Crit chance +2% and Thunderbolt skill", charged_skill: "none"},
        {id: 60, name: "Mythereum", rarity: "Common", type: "Trinket", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "Crit chance +3%", charged_skill: "none"},
        {id: 61, name: "Ring of Discord", rarity: "Common", type: "Trinket", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "Crit chance +2%", charged_skill: "none"},
        {id: 62, name: "Wingnut", rarity: "Legendary", type: "Trinket", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "20% on total health", charged_skill: "Tornado, hefty wind gusts hit up to 4 units"},
        {id: 63, name: "Skulletor", rarity: "Legendary", type: "Trinket", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "20% on total damage, but -10% on total health", charged_skill: "none"},
        {id: 64, name: "Death Neckless", rarity: "Legendary", type: "Trinket", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "10% on total damage, but -10% on total and health", charged_skill: "none"},
        {id: 65, name: "Ruby", rarity: "Legendary", type: "Trinket", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "51", base_dmg: "0", skill: "Total health increased by 24%", charged_skill: "none"},
        {id: 66, name: "Thunder Storm", rarity: "Rare", type: "Skill", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "0", skill: "none", charged_skill: "Sends a thunder bolt down on up to 3 enemies"},
        {id: 67, name: "Tornado", rarity: "Rare", type: "Skill", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "0", skill: "none", charged_skill: "Tornado, hefty wind gusts hit up to 4 units"},
        {id: 68, name: "Sword", rarity: "Common", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "51", skill: "none", charged_skill: "none"},
        {id: 69, name: "Sharp Sword", rarity: "Common", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "51", skill: "none", charged_skill: "none"},
        {id: 70, name: "Spear", rarity: "Common", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "51", skill: "none", charged_skill: "none"},
        {id: 71, name: "Stick", rarity: "Common", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "51", skill: "none", charged_skill: "none"},
        {id: 72, name: "Club", rarity: "Rare", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "71", skill: "+5% chance to cause stun", charged_skill: "none"},
        {id: 73, name: "Pink Blade", rarity: "Rare", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "71", skill: "+5% chance to cause bleeding", charged_skill: "none"},
        {id: 74, name: "Magic Wand", rarity: "Rare", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "71", skill: "none", charged_skill: "Heal 5% of its owners max health"},
        {id: 75, name: "Tribal Spear", rarity: "Mythic", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "91", skill: "+10% chance to poison enemies", charged_skill: "none"},
        {id: 76, name: "Tri-Blade", rarity: "Common", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "51", skill: "none", charged_skill: "none"},
        {id: 77, name: "Magic Stick", rarity: "Mythic", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "91", skill: "none", charged_skill: "Explode 1 random target"},
        {id: 78, name: "Aegis", rarity: "Mythic", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "91", skill: "none", charged_skill: "Heal 10% of its owners max health"},
        {id: 79, name: "Golden Shaft", rarity: "Legendary", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "121", skill: "Crit chance +8%", charged_skill: "Heal 30% of its owners max health"},
        {id: 80, name: "Lightning Blade", rarity: "Legendary", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "121", skill: "Crit chance +8%, Poison chance +30%", charged_skill: "none"},
        {id: 81, name: "Ender", rarity: "Legendary", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "121", skill: "Crit chance +8%, Stun chance +30%", charged_skill: "none"},
        {id: 82, name: "Dreams Killer", rarity: "Legendary", type: "Weapon", slots: "0", source: "Pack - Genesis", base_juice: "7", base_health: "0", base_dmg: "121", skill: "Crit chance +8%, Bleed chance +30%", charged_skill: "none"},
        {id: 83, name: "Enforced Jacket", rarity: "Rare", type: "Chest", slots: "0", source: "Drop - Raids / Shop", base_juice: "7", base_health: "401", base_dmg: "0", skill: "10% bonus on total health", charged_skill: "none"},
        {id: 84, name: "Enforced Hat", rarity: "Rare", type: "Head", slots: "0", source: "Drop - Raids / Shop", base_juice: "7", base_health: "401", base_dmg: "0", skill: "40% stun protection", charged_skill: "none"},
        {id: 85, name: "Enforced Pants", rarity: "Rare", type: "Legs", slots: "0", source: "Drop - Raids / Shop", base_juice: "7", base_health: "401", base_dmg: "0", skill: "40% bleed protection", charged_skill: "none"},
        {id: 86, name: "Enforced Gloves", rarity: "Rare", type: "Hands", slots: "0", source: "Drop - Raids / Shop", base_juice: "7", base_health: "401", base_dmg: "0", skill: "40% poison protection", charged_skill: "none"},
        {id: 87, name: "Enforced Boots", rarity: "Rare", type: "Feet", slots: "0", source: "Drop - Raids / Shop", base_juice: "7", base_health: "401", base_dmg: "0", skill: "+10% crit chance, +10% chance to cause bleeding", charged_skill: "none"},
        {id: 88, name: "Slicer", rarity: "Rare", type: "Weapon", slots: "0", source: "Drop - Raids / Shop", base_juice: "7", base_health: "0", base_dmg: "71", skill: "Bleed chance +10%", charged_skill: "none"},
        {id: 89, name: "Young Spartan", rarity: "Rare", type: "Chibi", slots: "2", source: "Drop - Raids / Shop", base_juice: "19", base_health: "251", base_dmg: "171", skill: "none", charged_skill: "Small Thunderbolt, lightning hits up to 2 enemies"},
        {id: 90, name: "Assassin", rarity: "Mythic", type: "Chibi", slots: "4", source: "Drop - Raids / Shop", base_juice: "19", base_health: "301", base_dmg: "191", skill: "none", charged_skill: "Small explode up to 3 random enemies"},
        {id: 91, name: "Wolf", rarity: "Legendary", type: "Chibi", slots: "8", source: "Drop - Raids / Shop", base_juice: "19", base_health: "351", base_dmg: "211", skill: "50% chance each round to trigger Burn baby! Set up to 3 enemies on fire", charged_skill: "none"},
        {id: 92, name: "Waterboarding", rarity: "Rare", type: "Skill", slots: "0", source: "Drop - Raids / Shop", base_juice: "7", base_health: "0", base_dmg: "0", skill: "none", charged_skill: "Inflict Waterboarding on up to 3 enemies"},
        {id: 93, name: "A1 Fighters", rarity: "Legendary", type: "Chibi", slots: "8", source: "Investment -A1 Fighters", base_juice: "19", base_health: "351", base_dmg: "211", skill: "none", charged_skill: "Explode up to 4 random enemies"},
        {id: 94, name: "Beginner Socks", rarity: "Common", type: "Feet", slots: "0", source: "Drop - Hunt", base_juice: "5", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 95, name: "Beginner Jacket", rarity: "Common", type: "Chest", slots: "0", source: "Drop - Hunt", base_juice: "5", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 96, name: "Beginner Pants", rarity: "Common", type: "Legs", slots: "0", source: "Drop - Hunt", base_juice: "5", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 97, name: "Beginner Hat", rarity: "Common", type: "Head", slots: "0", source: "Drop - Hunt", base_juice: "5", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 98, name: "Beginner Gloves", rarity: "Common", type: "Hands", slots: "0", source: "Drop - Hunt", base_juice: "5", base_health: "51", base_dmg: "0", skill: "none", charged_skill: "none"},
        {id: 99, name: "Young Shiney", rarity: "Common", type: "Chibi", slots: "2", source: "Drop - Hunt / Shop", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 100, name: "Caveman", rarity: "Common", type: "Chibi", slots: "2", source: "Drop - Hunt / Shop", base_juice: "19", base_health: "201", base_dmg: "151", skill: "none", charged_skill: "none"},
        {id: 101, name: "Ban", rarity: "Legendary", type: "Weapon", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "0", base_dmg: "301", skill: "20% chance to stun, 10% crit increase, 40% chance to cause explosion each round", charged_skill: "none"},
        {id: 102, name: "Leather Jacket+", rarity: "Mythic", type: "Chest", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "601", base_dmg: "0", skill: "10% bonus on total health", charged_skill: "none"},
        {id: 103, name: "Leather Boots+", rarity: "Mythic", type: "Feet", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "601", base_dmg: "0", skill: "10% crit chance, 10% chance to cause bleeding", charged_skill: "none"},
        {id: 104, name: "Leather Gloves+", rarity: "Mythic", type: "Hands", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "601", base_dmg: "0", skill: "40% poison protection, 10% chance to stun", charged_skill: "none"},
        {id: 105, name: "Leather Pants+", rarity: "Mythic", type: "Legs", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "601", base_dmg: "0", skill: "40% bleed protection", charged_skill: "none"},
        {id: 106, name: "Leather Helmet+", rarity: "Mythic", type: "Head", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "601", base_dmg: "0", skill: "40% stun protection", charged_skill: "none"},
        {id: 107, name: "Metal Chest+", rarity: "Legendary", type: "Chest", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "801", base_dmg: "0", skill: "20% bonus on total health", charged_skill: "none"},
        {id: 108, name: "Metal Boots+", rarity: "Legendary", type: "Feet", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "801", base_dmg: "0", skill: "20% crit chance, 20% chance to cause bleeding", charged_skill: "none"},
        {id: 109, name: "Metal Gloves+", rarity: "Legendary", type: "Hands", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "801", base_dmg: "0", skill: "50% poison protection, 15% chance to stun", charged_skill: "none"},
        {id: 110, name: "Metal Pants+", rarity: "Legendary", type: "Legs", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "801", base_dmg: "0", skill: "50% bleed protection", charged_skill: "none"},
        {id: 111, name: "Metal Helmet+", rarity: "Legendary", type: "Head", slots: "0", source: "Drop - Hunt NM / Shop", base_juice: "6", base_health: "801", base_dmg: "0", skill: "50% stun protection", charged_skill: "none"},
    ];