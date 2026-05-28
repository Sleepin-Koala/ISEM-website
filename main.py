import pandas , sqlite3


aaa = sqlite3.connect("test.db")


aa = pandas.read_json("DB.json" , encoding="utf-8")

aa.to_sql("res",aaa)
