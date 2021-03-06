const fi = {
    // Navigation
    home: 'Koti',
    settings: 'Asetukset',
    authentication: 'Kirjautuminen',

    // Login and register forms' buttons
    back: 'takaisin',
    reset: 'nollaa',
    delete: 'poista',
    remove: 'poista',
    edit: 'muokkaa',
    close: 'sulje',
    cancel: 'peruuta',
    ok: 'ok',
    save: 'tallenna',
    fullName: 'Koko nimi',

    // Settings
    addNewCar: 'Lisää auto',
    adminPanel: 'Ylläpitäjän paaneli',
    logout: 'Kirjaudu ulos',

    // Login and register
    licensePlate: 'Rekisterinumero',
    carName: 'Auton nimi',
    addCarDetailsTitle: 'Lisää auton tiedot',
    addCarErrorMessage: 'Autoa ei löydy tietokannasta',
    registerCarInfo: 'Käyttääksesi applikaatiota, sinun tulee omistaa vehon tiedoissa oleva auto. Syötä pyydetyt tiedot autosta alle.',
    registerCarDemoInfo: 'Voit demotarkoituksiin käyttää tätä rekisteriotetta: OXZ-408',

    // Labels for inputs
    firstName: 'Etunimi',
    lastName: 'Sukunimi',
    email: 'Sähköposti',
    password: 'Salasana',
    repeatPassword: 'Kirjoita salasana uudelleen',
    login: 'Kirjaudu',
    register: 'Rekisteröidy',
    createUser: 'Luo käyttäjä',

    // Buttons for login and register screens
    forgotPassword: 'Unohditko salasanan?',
    backToLogin: 'Takaisin kirjautumiseen',

    // RegisterHints
    nameError: '*Pitää olla vähintään 3 kirjainta',
    emailError: '*Sähköposti ei kelpaa',
    passwordError: '*Ei tarpeeksi vahva',

    // Admin 
    adminHeader: 'Ylläpitäjän tila',
    addManager: 'Lisää manageri',
    foundUser: 'Käyttäjä löytyi!',

    // placeholder
    emailPlaceholder: 'Etsi sähköpostilla...',
    locationPlaceholder: 'Etsi sijainnin nimellä...',

    //buttons: 
    addAsManager: 'Lisää managerina',
    clear: 'tyhjennä',
    search: 'hae',

    hideManagers: 'Piilota managerit',
    showManagers: 'Näytä managerit',

    hideLocations: 'Piilota sijainnit',
    showLocations: 'Näytä sijainnit',

    editLocation: 'Muokkaa sijaintia',
    addLocation: 'Lisää uusi sijainti',
    addNewLocation: 'Lisää uutena sijaintina',

    searchLocationPlaceholder: 'Etsi sijainnin nimellä...',

    // InputHints for admin. User and Location management
    currentName: 'Nimeä, tämänhetkinen:',
    currentNameConditional: 'Sijainnin nimi...',
    publicStations: 'Vapaat asemat, tämänhetkisiä:',
    publicStationsConditional: 'Vapaiden asemien määrä...',
    dedicatedStations: 'Varatut asemat, tämänhetkisiä:',
    dedicatedStationsConditional: 'Varattujen asemien määrä...',

    // QueueLayout 
    currentlyCharging: "Autosi on latauspaikalla",
    startCharging: 'Varaa latauspaikka',
    stopCharging: 'Merkkaa paikka vapautetuksi',
    skipMessage: `Et voi varata paikkaa?`,
    skip: 'Anna seuraavalle',
    queue: 'Jonota',
    leaveQueue: 'Poistu jonosta',
    toChargingView: 'Latausnäkymään',

    //managerLayout, for the alert message
    addCarMessage: `Lisää auto prioriteetteihin? Auto:`,
    removeCarMessage: `Poista auto prioriteeteistä? Auto: `,
    title: 'Priorisoi',

    // QueueInfo-component
    currentlyChraging: "Autosi latautuu",
    numberOfCars: 'Autojen määrä jonossa:',
    noCarsInQueue: 'Jono on tyhjä',
    freeSpots: 'Vapaita paikkoja:',
    noSpots: 'Vapaita paikkoja ei ole',
    yourPosition: 'Sijaintisi jonossa:',
    notInQueue: 'Et ole jonossa',

    // Charging view
    estimatedTime: 'Arvioitu aika:',

    // Errors
    pleaseRestart: 'Käynnistä sovellus uudellelleen',

    // Notifications
    stationAvailableTitle: 'You are next in queue!',
    stationAvailableBody: 'Charging station opened up. You can go and move your car to charge',

    carIsFullPrefix: 'Your car',
    carIsFullTitle: 'has charged!',
    carIsFullBody: 'Please consider moving it so others can charge theirs',
}

export default fi;