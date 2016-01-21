var tarotCards = [
        {name: 'Ace of Cups', class: 'aceCups', img: 'images/cards/aceOfCups.jpg', def: 'Great abudance. Fulfillment. Perfection. Joy. Fertility. Opulence. Fullness. Happiness. Productiveness. Beauty and pleasure. Goodness overflowing. Favorable outlook.'},
        {name: 'Two of Cups', class: 'twoCups', img: 'images/cards/twoOfCups.jpg', def: 'Love. Friendship beginning or renewed. Passion. Union. Engagement. Understanding. Cooperation. Partnership. Marriage. Harmony of opposites.'},
        {name: 'Three of Cups', class: 'threeCups', img: 'images/cards/threeOfCups.jpg', def: 'Resolution of a problem. Conclusion. Solace. Healing. Satisfactory merit.  Fulfillment. Compromise. Friendship among women. Inspiration in arts.'},
        {name: 'Four of Cups', class: 'fourCups', img: 'images/cards/fourOfCups.jpg', def: 'Weariness. Aversion. Disgust. Disappointment. Unhappiness. Bitter experience. Stationary period in one\'s life. Material success does not allay discontent.'},
        {name: 'Five of Cups', class: 'fiveCups', img: 'images/cards/fiveOfCups.jpg', def: 'Partial loss. Regret. Friendship without real meaning. Marriage without real love. Imperfection. Flaw. Inheritance. Incomplete union or partnership.'},
        {name: 'Six of Cups', class: 'sixCups', img: 'images/cards/sixOfCups.jpg', def: 'Memories. Past influences. Things that have vanished. Childhood passed. Nostalgia. Faded images. Longing. Reflections on the past bring insight.'},
        {name: 'Seven of Cups', class: 'sevenCups', img: 'images/cards/sevenOfCups.jpg', def: 'Fantasy. Unrealistic attitudes. Imagination. Daydreams. Foolish whims. Wishful thinking. Illusionary success. Person with impressive appearence but no substance.'},
        {name: 'Eight of Cups', class: 'eightCups', img: 'images/cards/eightOfCups.jpg', def: 'Discontinuance of effort. Disappointment. Abdandonment of previous plans. Shyness. Modesty. Success abandoned, possibly for something better. Indolence.'},
        {name: 'Nine of Cups', class: 'nineCups', img: 'images/cards/nineOfCups.jpg', def: 'Success. Material abudance. Advantage. Well-being. Abdundance. Good health. Victory. Difficulties surrmounted. Stability. Wishes fulfilled.'},
        {name: 'Ten of Cups', class: 'tenCups', img: 'images/cards/tenOfCups.jpg', def: 'Home. Abode. Happiness. Joy. Contentment. Good family life. Honor. Esteem. Virtue. Reputation. Support by community.'},
        {name: 'Page of Cups', class: 'pageCups', img: 'images/cards/pageOfCups.jpg', def: 'A studious and intent person. Reflectiveness. Meditativeness. Loyalty. Offer of services and efforts towards a specific goal. A helpful person. A trustworthy worker.'},
        {name: 'Knight of Cups', class: 'knightCups', img: 'images/cards/knightOfCups.jpg', def: 'Responsibility and creativity. Learned person. Professional Businessman. Lawyer. Religious person. Scientist. Artist. A considerate person. Generosity.'},
        {name: 'Queen of Cups', class: 'queenCups', img: 'images/cards/queenOfCups.jpg', def: 'A warm-hearted and fair person. Poeticness. Beloved, adored person. Good friend and mother. Devoted wife. Honesty. Loving intelligence. Gift of vision.'},
        {name: 'King of Cups', class: 'kingCups', img: 'images/cards/kingOfCups.jpg', def: 'Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence. Beware of ill-will on the part of a man of position, and of hypocrisy pretending to help.'},
        {name: 'Ace of Pentacles', class: 'acePentacles', img: 'images/cards/aceOfPentacles.jpg', def: 'Perfection. Attainment. Prosperity. Felicity. Riches. Bliss. Ecstacy. Gold. valuable coins or artifacts. Treasures. The combination of material and spiritual prosperity.'},
        {name: 'Two of Pentacles', class: 'twoPentacles', img: 'images/cards/twoOfPentacles.jpg', def: 'Difficulty in launching new projects. Difficult situations arising. New troubles. Embarrassment. Worry. Concern. Change which must be faced with equanimity.'},
        {name: 'Three of Pentacles', class: 'threePentacles', img: 'images/cards/threeOfPentacles.jpg', def: 'Great skill in trade or work. Mastery. Perfection. Artistic ability. Dignity. Renown. Rank. Power. An artisan who\'s work is in great demand.'},
        {name: 'Four of Pentacles', class: 'fourPentacles', img: 'images/cards/fourOfPentacles.jpg', def: 'Love of material wealth. Hoarder. Usurer. Skinflint. Miser. Ungenerous person. Inability to share. Greed. Fear of financial upset. Acquisitiveness.'},
        {name: 'Five of Pentacles', class: 'fivePentacles', img: 'images/cards/fiveOfPentacles.jpg', def: 'Material trouble. Destitution. Loss. Failure. Error. Impoverishment. Mistress. Lover. Affection. Loss of job. Emotional confusion causes monetary problems.'},
        {name: 'Six of Pentacles', class: 'sixPentacles', img: 'images/cards/sixOfPentacles.jpg', def: 'Generosity. Philanthropy. Charity. Kindess. Gratification. Gifts. Material gain. Sharing of wealth, but with measured generosity. Favors, especially monetary.'},
        {name: 'Seven of Pentacles', class: 'sevenPentacles', img: 'images/cards/sevenOfPentacles.jpg', def: 'Ingenuity. Growth. Hard work. Progress. Successful dealings. Money. Wealth. Treasure. Reorganization. Results of efforts are nearly due.'},
        {name: 'Eight of Pentacles', class: 'eightPentacles', img: 'images/cards/eightOfPentacles.jpg', def: 'Apprencticeship. Craftsmanship. Ability to learn quickly. Candor. Frankness. Modesty. Handiwork. Personal effort. Commitment to the task at hand.'},
        {name: 'Nine of Pentacles', class: 'ninePentacles', img: 'images/cards/nineOfPentacles.jpg', def: 'Accomplishment. Discernment. Discretion. Foresight. Safety. Prudence. Material well-being. Love of nature. Sheltered environment. Cautious exploration.'},
        {name: 'Ten of Pentacles', class: 'tenPentacles', img: 'images/cards/tenOfPentacles.jpg', def: 'Prosperity. Riches. Security. Safety. Family. Family matters. Ancestry. Inheritance. Home. Dwelling. Heirlooms. Rewards of old age and experience.'},
        {name: 'Page of Pentacles', class: 'pagePentacles', img: 'images/cards/pageOfPentacles.jpg', def: 'Deep concentration or application. Study. Scholarship. Reflection. Respect for knowledge. Desire for learning and new ideas. A do-gooder. Bearer of news.'},
        {name: 'Knight of Pentacles', class: 'knightPentacles', img: 'images/cards/knightOfPentacles.jpg', def: 'A mature and responsible person. Reliable person. Persistence. Ability to conclude a task. Laboriousness. Organization. Capability. A dependable person.'},
        {name: 'Queen of Pentacles', class: 'queenPentacles', img: 'images/cards/queenOfPentacles.jpg', def: 'Prosperity and well-being. Luxury. Extreme comfort. Security. Magnificence. Grace. Dignity. A rich person but generous and charitable. A nobel soul.'},
        {name: 'King of Pentacles', class: 'kingPentacles', img: 'images/cards/kingOfPentacles.jpg', def: 'An experienced, successful leader. Character and intelligence. Business acumen. Mathematical ability. Loyal friend. Reliable marriage partner. Wise investments.'},
        {name: 'Ace of Swords', class: 'aceSwords', img: 'images/cards/aceOfSwords.jpg', def: 'Great determination. Initiative. Strength. Force. Activity. Triumph. Power. Success. Fertility. Prosperity. Deep emotional feeling. Love. Championship. Conquest.'},
        {name: 'Two of Swords', class: 'twoSwords', img: 'images/cards/twoOfSwords.jpg', def: 'Balanced force. Harmony. Firmness. Concord. Offsetting factors. Stalemate. Affection. Truce. Courtesy. Tact is necessary to maintain peace.'},
        {name: 'Three of Swords', class: 'threeSwords', img: 'images/cards/threeOfSwords.jpg', def: 'Absence. Sorrow. Disappointment. Strife. Removal. Dispersion. Oppostion. Separation. Delay. Tears. Unhappiness. Affliction. Grief.'},
        {name: 'Four of Swords', class: 'fourSwords', img: 'images/cards/fourOfSwords.jpg', def: 'Repose. Replenishment. Solitude. Exile. Retreat. Temporary seclusion. Abandonment. Convalescence. Convention as escape from a mental disorder.'},
        {name: 'Five of Swords', class: 'fiveSwords', img: 'images/cards/fiveOfSwords.jpg', def: 'Conquest. Defeat. Destruction of others. Degredation. Adversaries may arise. Revocation. Infamy. Dishonor. Sentimentality that weakens the will.'},
        {name: 'Six of Swords', class: 'sixSwords', img: 'images/cards/sixOfSwords.jpg', def: 'A trip or journey, especially by water. Travel. Voyage. Route. Headstrong attempt to overcome difficulties. Expedient manner. Success after anxiety.'},
        {name: 'Seven of Swords', class: 'sevenSwords', img: 'images/cards/sevenOfSwords.jpg', def: 'New plans. Wishes. Fortitude. Perseverance. Attempt. Endeavor. Hope. Confidence. Fantasy. Design. Uncertain efforts. Vacillation.'},
        {name: 'Eight of Swords', class: 'eightSwords', img: 'images/cards/eightOfSwords.jpg', def: 'Crisis. Calamity. Conflict. Domination. Imprisonment. Bad news. Censure. Criticism. Calumny. Misfortune can end if opportunities are seized.'},
        {name: 'Nine of Swords', class: 'nineSwords', img: 'images/cards/nineOfSwords.jpg', def: 'Misery. Concern. Quarrel. Unhappiness. Miscarriage. Anxiety over a loved one. Worry. Dispair. Suffering. Desolation. Sleeplessness.'},
        {name: 'Ten of Swords', class: 'tenSwords', img: 'images/cards/tenSwords.jpg', def: 'Ruin. Pain. Sadness. Mental anguish. Desolation. Tears. Misfortune. Trouble. Disappintment. Grief. Sorrow.'},
        {name: 'Page of Swords', class: 'pageSwords', img: 'images/cards/pageOfSwords.jpg', def: 'Symbolizes a perso adept at perceiving the unknown. Vigilance. Agility. An active youth. A lithe figure alert and awake to unknown dangers.'},
        {name: 'Knight of Swords', class: 'knightSwords', img: 'images/cards/knightOfSwords.jpg', def: 'Bravery. Capacity. The strength and dash of a young man. Heroic action. Impetuous rush into the unknown without fear. A master in the art of action and warfare.'},
        {name: 'Queen of Swords', class: 'queenSwords', img: 'images/cards/queenOfSwords.jpg', def: 'Sharp, quick-witted, keen person. Intensely perceptive, subtle person. May signify a woman of sadness. Absence. Loneliness. Separation.'},
        {name: 'King of Swords', class: 'kingSwords', img: 'images/cards/kingOfSwords.jpg', def: 'An active and determined person. Experience. Authority. Someone proficient in their field.Highly analytical person. A person having many ideas and designs.'},
        {name: 'Ace of Wands', class: 'aceWands', img: 'images/cards/aceOfWands.jpg', def: 'Creation. Beginning. Invention. Start of an undertaking. Fortune. Enterprise. Gain. Inheritance. Birth of a child. Beginning of a meaningful experience. An adventure.'},
        {name: 'Two of Wands', class: 'twoWands', img: 'images/cards/twoOfWands.jpg', def: 'Mature individual. Ruler. Attainment of goals and needs. Boldness. Courage in undertakings. A dominant personality. Melancholy in the midst of wordly riches.'},
        {name: 'Three of Wands', class: 'threeWands', img: 'images/cards/threeOfWands.jpg', def: 'Practical knowledge. Business acumen. Strength. Enterprise. Negotiations. Trade. Commerce. Undertaking import and export in business.'},
        {name: 'Four of Wands', class: 'fourWands', img: 'images/cards/fourOfWands.jpg', def: 'Romance. Security. Harmony. Newly acquired prosperity. Peace. Tranquility. The fruits of labor. Rest after strife. Concord. Union. Repose'},
        {name: 'Five of Wands', class: 'fiveWands', img: 'images/cards/fiveOfWands.jpg', def: 'Unsatisfied desires. Struggle. Labor. Endeavors. Violent Strife. Conflict. Obstacles. Competition. Fighting. Aggression. Martial arts. Violent sports.'},
        {name: 'Six of Wands', class: 'sixWands', img: 'images/cards/sixOfWands.jpg', def: 'Triumph. Good news. Gain. Advancement. Expectation. Desires realized- the results of efforts. Promotion. Recognition of abilities. Ideas implemented.'},
        {name: 'Seven of Wands', class: 'sevenWands', img: 'images/cards/sevenOfWands.jpg', def: 'Success. Gain. Overcoming obstacles and challenges. Surmounting overwhelming odds. Advantage. Victory. Valor. Successful negotiations with opponents.'},
        {name: 'Eight of Wands', class: 'eightWands', img: 'images/cards/eightOfWands.jpg', def: 'Swift activity. Sudden progress or movement. Speed. Hastily made decisions. Too rapid advancement. Messages delivered instantly.'},
        {name: 'Nine of Wands', class: 'nineWands', img: 'images/cards/nineOfWands.jpg', def: 'Expectation of difficulties and changes. Awaiting tribulation. Anticipation. Hidden enemies. Deception. Discipline. Order. A pause in a current struggle.'},
        {name: 'Ten of Wands', class: 'tenWands', img: 'images/cards/tenOfWands.jpg', def: 'Overburdened feeling. Excessive pressures. Problems soon to be resolved. Effort to meet a goal. Possibly using power for selfish ends.'},
        {name: 'Page of Wands', class: 'pageWands', img: 'images/cards/pageOfWands.jpg', def: 'A faithful and loyal person. An envoy. Emissary. Trusted friend. A stranger with good intentions. A consistent person. A bearer of important news.'},
        {name: 'Knight of Wands', class: 'knightWands', img: 'images/cards/knightOfWands.jpg', def: 'Departure. A journey. Advancement into the unknown. Altercation. Flight. Absence. Change of residence. Traveler. Emigration. Dark young man.'},
        {name: 'Queen of Wands', class: 'queenWands', img: 'images/cards/queenOfWands.jpg', def: 'A sympathetic and understanding person. Friendliness. Lovingness. Honor. Practicality. Ability for meaningful expression and love. Sincere interest in others.'},
        {name: 'King of Wands', class: 'kingWands', img: 'images/cards/kingOfWands.jpg', def: 'An honest and conscientious person. Maturity. Devotion. Friendliness. Sympathy. Educated gentlemen. Generally, a married person. Fatherly person.'},
        {name: 'The Fool', class: 'fool', img: 'images/cards/theFool.jpg', def: 'Beginning of an adventure. Enthusiasm. Initiative. New school or job. Unlimited possibilities. Thoughtlessness. Carelessness. Extravagence. Folly. Obsession'},
        {name: 'The Magician', class: 'magician', img: 'images/cards/theMagician.jpg', def: 'Creativity. Free will. Self-reliance. Skill. Spontoneity. Willpower. Self-confidence. A good salesman. Dexterity. Ingenuity. Deception. Trickery. Sleight of hand.'},
        {name: 'The High Priestess', class: 'highPriestess', img: 'images/cards/theHighPriestess.jpg', def: 'Wisdom. Sound judgement. Serene Knowledge. Common sense. Penetration. Education. Hidden emotion. Practical person. Analytical. Frequently too restrained.'},
        {name: 'The Empress', class: 'empress', img: 'images/cards/theEmpress.jpg', def: 'Feminine Progress. Action. Fertility. Marriage. Mother. Sister. Wife. Girlfriend. Feminine influence. Female guiles. The motivation behind a successful partner.'},
        {name: 'The Emperor', class: 'emperor', img: 'images/cards/theEmperor.jpg', def: 'Worldly power. Accomplishment. Confidence. Father. Brother. Husband. Male influence. Wealth. Maturity. Stability. Authority. Leadership. Conviction.'},
        {name: 'The Priest', class: 'priest', img: 'images/cards/thePriest.jpg', def: 'Ritualism. Goodness. Kindness. Compassion. Well-meaning person. Platonic friend. Inactivity. Lack of conviction. Timidty. Captive to one\'s own ideas.'},
        {name: 'The Lovers', class: 'lovers', img: 'images/cards/theLovers.jpg', def: 'Love. Beauty. Perfection. Harmony. Trust. Honor. Beginning of a romance or friendship. Deep feeling. Freedom of emotion. Testing of sincerity. Marriage.'},
        {name: 'The Chariot', class: 'chariot', img: 'images/cards/theChariot.jpg', def: 'Fortitude. Perseverance. Major effort. Possible voyage or journey. Escape. Rushing to decision. Trouble. Adversity. Conflicting influence. Turmoil. Vengeance.'},
        {name: 'Strength', class: 'strength', img: 'images/cards/strength.jpg', def: 'Control over a situation. Strength. Courage. Fortitude. Conviction. Energy. Determination. Defiance. Action. Confidence. Accomplishment. Conquest. Fervor.'},
        {name: 'The Hermit', class: 'hermit', img: 'images/cards/theHermit.jpg', def: 'Counsel. Knowledge. Solicitude. Self-illumination. Prudence. Discretion. Caution. Vigilance. Circumspection. Self-denial. Withdrawl. Regression. Desertion.'},
        {name: 'Wheel of Fortune', class: 'wheelOfFortune', img: 'images/cards/wheelOfFortune.jpg', def: 'Destiny. Fortune. Fate. Outcome. Advancement for better or worse. Culmination. Conclusion. Approaching the end of a problem. Unexpected results may occur.'},
        {name: 'Justice', class: 'justice', img: 'images/cards/justice.jpg', def: 'Fairness. Reasonableness. Justice. Proper balance. Harmony. Just reward. Sincere desire. Good intentions. Well-meaning actions. Self-satisfaction. Advice.'},
        {name: 'The Hanged Man', class: 'hangedMan', img: 'images/cards/theHangedMan.jpg', def: 'Suspension. Transition. Change. Reversal of one\'s way of life. Apathy. Boredom. Abandonment. Renunciation. Sacrifice. Readjustment.Regeneration. Rebirth.'},
        {name: 'Death', class: 'death', img: 'images/cards/death.jpg', def: 'Transformation. Clearing away the old to make way for the new. Alteration. Abrupt change. Bad omen. Illness. Mishap. Loss of financial security. Bad investment.'},
        {name: 'Temperance', class: 'temperance', img: 'images/cards/temperance.jpg', def: 'Temperance. Patience. Harmony. Bringing together into perfect union. Management. Compatibility. Adjustment. Good influence. Fortunate omen. Successful combination.'},
        {name: 'The Devil', class: 'devil', img: 'images/cards/theDevil.jpg', def: 'Subordination. Downfall. Lack of success. Weird experience. Unexpected failure. Inability to realize one\'s goals. Unhappiness. Controversy. Self-punishment.'},
        {name: 'The Tower', class: 'tower', img: 'images/cards/theTower.jpg', def: 'Complete and sudden change. Abandonment of past relationships. End of a long friendship. Unexpected events. Downfall. Undoing. Loss of stability. Setback.'},
        {name: 'The Star', class: 'star', img: 'images/cards/theStar.jpg', def: 'Hope. Faith. Inspiration. Bright prospects. Mixing of the past and present. Optimism. Good omen. Fulfillment. Satisfaction. Pleasure. Happiness.'},
        {name: 'The Moon', class: 'moon', img: 'images/cards/theMoon.jpg', def: 'Deception. Obscurity. Trickery. Dishonesty. Danger. Error. Bad influence. Insincerity. False friends. Deceit. Double dealing. Being taken advantage of. Caution.'},
        {name: 'The Sun', class: 'sun', img: 'images/cards/theSun.jpg', def: 'Satisfaction. Accomplishment. Favorable social relationships. Love. Joy. Devotion. Engagement. Happy marriage. Pleasure in daily existance. Exuberance. Sincerity.'},
        {name: 'Judgement', class: 'judgement', img: 'images/cards/judgement.jpg', def: 'Atonement. Judgement. Need to repent and forgive. Time to account for our actions. Improvement. Development. Promotion. Outcome of past effort. Rebirth.'},
        {name: 'The World', class: 'world', img: 'images/cards/theWorld.jpg', def: 'Perfection. Recognition. Honor. Ultimate change. Fulfillment. Capability. Triumph in undertakings. Success. Admiration of others.'}
    ],
    positionMeanings = [
        'This card represents you in your present position. That which is the here and now as a culmination of all that has led you to this point.',
        'This card represents your present expectations; that which you believe is in your present or future. Your current and future outlook.',
        'This card represents the unexpected. That which is hidden from you, but may come to pass.',
        'This card represents your immediate future; those persons, ideas or circumstances which lie just out of reach, but are approaching and will be arriving shortly.',
        'This card represents your long-term future.'
    ],
    shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
        while (0 !== currentIndex) {

    // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

    // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

$(function () {
});