import requests

API_KEY = 'f779c64747a14dcfb3b82813230906'


    
city = input('Entrez le nom de votre ville : ') 

# OU

# city = 'Valenciennes'


url = f'http://api.weatherapi.com/v1/current.json?key={API_KEY}&q={city}&aqi=no'

response = requests.get(url)
data = response.json()

condition = data['current']['condition']['text']

# print(condition)

tempsCondition = None


# Vérifiez si la description contient des mots clés pour le soleil ou les nuages
if 'sun' in condition.lower():
    tempsCondition = ('Le temps est ensoleillé')
elif 'cloud' in condition.lower():
    tempsCondition = ('Le temps est nuageux')
elif 'overcast' in condition.lower():
    tempsCondition =('Le temps est couvert')
elif 'rain' in condition.lower():
    tempsCondition =('Le temps est pluvieux')
else:
    tempsCondition = ('Le temps n\'est ni ensoleillé ni nuageux')  
    

temperature = float(data['current']['temp_c'])


def conseilChaleur(temperature):
    if temperature >= 30:
        return 'Canicule'
    elif temperature >= 25:
        return 'Pensez à prendre une casquette'
    else:
        return 'Pas de chaleur'

# Utilisation de la fonction
conseil = conseilChaleur(temperature)

print(f'Température à {city} : {data["current"]["temp_c"]}°C, {tempsCondition}, \n{conseil}, dernière mise à jour : {data["current"]["last_updated"]}')

