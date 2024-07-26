*** Settings ***
Library    SeleniumLibrary

*** Variables ***
# ${chrome_options}    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
${URL}    http://localhost:5174/
${BROWSER}    Chrome

*** Test Cases ***
Connexion
    [Documentation]    Vérifie qu'un utilisateur peut se connecter avec succès.
    Login succefully
    Wait Until Page Contains    Admin
    Page Should Contain    Admin
    Close Browser

Modifier son profil
    [Documentation]    Vérifie qu'un utilisateur peut modifier son profil.
    Login succefully
    Wait Until Page Contains    Admin
    Page Should Contain    Admin
    Click Button    //button[@id="headlessui-menu-button-:r5:"]
    Click Link    //a[@href="/admin/profile"]
    Title Should Be    Blog | BackOffice
    Page Should Contain    Admin
    Page Should Contain    Prénom
    Page Should Contain    Nom
    Page Should Contain    Pseudo
    Page Should Contain    Email
    Page Should Contain    Status
    Page Should Contain    Avatar
    Click Button    Mettre à jour mes données
    Input Text    firstname    Toto
    Input Text    lastname    Toto
    Click Button    Valider
    Close Browser

Se déconnecter
    [Documentation]    Vérifie qu'un utilisateur peut se déconnecter.
    Login succefully
    Wait Until Page Contains    Admin
    Page Should Contain    Admin
    Click Button    //button[@id="headlessui-menu-button-:r5:"]
    Click Button    Déconnexion
    Page Should Contain    Blog
    Page Should Contain    Connectez-vous !
    Close Browser

*** Keywords ***
Login succefully
    Open Browser    ${URL}    ${BROWSER}    options=add_argument("disable-search-engine-choice-screen");
    Title Should Be  Blog | BackOffice
    Input Text    email    toto@toto.fr
    Input Text    password    Toto*1234
    Click Button    Se connecter

