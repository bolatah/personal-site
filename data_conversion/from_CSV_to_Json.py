#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Mar 16 10:49:40 2021

@author: bolat
"""

import pandas as pd
from itertools import groupby
from collections import OrderedDict
import json

df=pd.read_csv('/home/bolat/Desktop/react.learning/py/tez/aggrExp2.csv', dtype={'id':str, 'color':str, '1990':str, '1991':str, '1992':str, '1993':str, '1994':str, '1995':str, '1996':str,
       '1997':str, '1998':str, '1999':str, '2000':str, '2001':str, '2002':str, '2003':str, '2004':str, '2005':str,
       '2006':str, '2007':str, '2008':str})

results = []
for (id, color), bag in df.groupby(["id","color"]):
    contents_df = bag.drop(["id", "color"], axis=1)
    data = [OrderedDict(row) for i,row in contents_df.iterrows()]
    results.append(OrderedDict([("id", id),
                                ("color", color),
                                ("data", data)]))
  
    
    print (json.dumps(results[0:2], indent=4))
    with open('Converted_Json.json', 'w') as outfile:
        outfile.write(json.dumps(results[0], indent=4))