import requests

API_KEY = 'f779c64747a14dcfb3b82813230906'

# city = input('Entrez le nom de votre ville : ') 

# OU

city = 'Valenciennes'


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
else:
    tempsCondition = ('Le temps n\'est ni ensoleillé ni nuageux')  
    

print(f'Température à {city} : {data["current"]["temp_c"]}°C, {tempsCondition}, dernière mise à jour : {data["current"]["last_updated"]}')

temps_C = float(data['current']['temp_c'])

if temps_C >= 30:
    print('Canicule')
elif temps_C >= 25:
    print('Pensez à prendre une casquette')
else:
    print('Pas de chaleur')

    
# Apprendre boucle for
