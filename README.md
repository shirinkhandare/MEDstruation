# SheInnovatesProject
Project
created by Nandin-Erdene Molomjamts, Lan Nguyen, Shirin Khandare, Veronika Makowski

The goal of MEDstruation is to provide user-friendly experience for women to track their menstruation cycle, learn about the potential side effects of their medication in simplified and understandable manner. 

This is the link to the Google Drive that contains the data/ folder:
https://drive.google.com/drive/folders/1bcOpWSFr3REJmCW4WK9dQTUDvXipOGsj?usp=drive_link

## Setup Instructions for MongoDB

1. **Pull latest changes:**
```bash
   git pull
```

2. **Install dependencies:**
```bash
   npm install
   python -m pip install -r requirements.txt
```

3. **Create a `.env` file:**
   
   **Windows:**
```powershell
   Copy-Item .env.example .env
```
   
   **Mac/Linux:**
```bash
   cp .env.example .env
```
   
   Then edit `.env` and add the MongoDB connection string (ask me (Lan) for password. When pasting it in, get rid of the brackets <>). DO NOT share the password publically.

4. **Important:** Data is already in MongoDB Atlas - you do NOT need to download or process data files. I've already done that. ^_^

5. **Start the API server:**
```bash
   python App.py
```
Do not worry if you cannot type any commands when running python App.py. The Flask server is just running and taking over the terminal. Simply start a new terminal, so you have two terminals. One to run the server, the other to run git commands.
   
   The API will be available at `http://localhost:5000`

## API Endpoints

- `GET /api/drugs` - Get all drugs (374 drugs)
- `GET /api/drug/<drug_name>` - Get specific drug info
- `GET /api/search/<effect>` - Search by menstrual effect

Example:
```
http://localhost:5000/api/drug/STELARA
http://localhost:5000/api/search/Dysmenorrhoea
```

## Environment Variables

- `MONGODB_URI`: MongoDB Atlas connection string (get from team)
- `DATA_DIR`: Path to data folder (default: `./data`) - not needed for normal use

## For Development

The database already has 374 drugs with menstrual side effects. You only need to run the API server (`python App.py`) to access the data.