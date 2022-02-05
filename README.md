
# Deal OR Nodeal
A Web Based Game Inspired from Popular Television Game Show

 - [About](#about)
 - [GamePlay](#GamePlay)

## About
Deal OR Nodeal is a multi player web game built using JavaScript [Socket](https://socket.io/) library. Front-end is built using [React](https://reactjs.org/) and [Tailwind CSS.](https://tailwindcss.com/) Back-end is Powered By [Node](https://nodejs.org).

#### Multi-Player [beta]
clone and install required dependencies.

    git clone https://github.com/sanishc/deal-or-nodeal.git
    cd deal-or-nodeal
    npm install && npm run dev

Anyone in your the local network can now access the game from their browser. players can be either a banker or contestant.

#### Single-Player [beta]
single player version can be played without local setup. visit https://sanishc.github.io/deal-or-nodeal.  To play locally follow the same steps mentioned above in single player branch. you can use below command to switch branch.

    git checkout single-player

## GamePlay
The contestant chooses one of 26 numbered briefcases at the start of the game. Each briefcase contains a cash value from 1 to 1000000. on side displays the amounts still in play at any given moment. The contestant's chosen case will be hidden (first box selected). In the first round, the contestant chooses six cases to eliminate from play, one at a time. Each case is opened as it is chosen, and the amount inside is removed from the money tree. 

After the sixth pick, Banker's offer to buy the contestant's case will be displayed. The contestant can accept the offer and end the game by clicking Deal or reject it by clicking Nodeal. Each time an offer is rejected, the contestant must play another round, eliminating progressively fewer cases: five in the second round, four in the third, three in the fourth, two in the fifth. Beyond the fifth round, the contestant eliminates one case at a time, receiving a new offer from the Banker after each. 

The ninth and final offer comes when there are only two cases left in play: the one originally chosen by the contestant and one other. If the contestant rejects this final offer, he/she may either keep the chosen case or trade it for the other. The contestant receives the amount in the case taken.
