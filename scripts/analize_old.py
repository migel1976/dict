#! /usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import json
import io

def clean(text):
    if not isinstance(text,str):
        raise TypeError('text must be str')
    
    #for i in [',','.',':',';','!','?']:
    for i in ['"','(',')','{','}',',','.',':',';','!','?']:
        text=text.replace(i,'')
    arr=text.split()
    summary=[]
    flagsummary=False
    try:
        for element in arr:
            for i in ['на','к']:
                if element==i:
                    flagsummary=False
                    break
                else:
                    flagsummary=True
            if flagsummary:
               summary.append(element.decode('utf-8').lower().encode('utf-8'))
               flagsummary=False
    except Exception as ex:
            print('error in def clean', ex)
    return summary

def oldrussian(text):
    summary=[];
    flagoldrussian=False;
    for element in text:
        for i in ['ъ','i','ѵ','ѣ','ѳ']:
            if element.find(i)!=-1:
                flagoldrussian=True
                break
            else:
                flagoldrussian=False
        if flagoldrussian:
            summary.append(element)
            flagoldrussian=False
    return sorted(summary)
            
                
try:
    FILENAME=sys.argv[1]
    YEAR=sys.argv[2]
    TYPE=sys.argv[3]
    with open(FILENAME,'r') as fileRead:
        contents=fileRead.readlines()
        myarray=[]
        myoldrussianarray=[]
        for content in contents:
            myarray=myarray+clean(content)
        myoldrussianarray=oldrussian(myarray)
    fileRead.close()
except Exception as ex:
    print('error in readfile',ex)
try:
    data=[]
    with open('output.json','w') as fileWrite:
    #with io.open('output.json','w',encoding='utf-8') as fileWrite:
        s=myoldrussianarray
        e = ''
        #fileWrite.write('['+'\n');
        for element in myoldrussianarray:
            if element == e: continue
            count=s.count(element)
            #print(element + ' ' + str(count))
            #fileWrite.write(element+'\n')
            #fileWrite.write(element+' '+str(count)+'\n')
            #fileWrite.write('{"name":"'+element+'","count":'+str(count)+'},'+'\n');
            # json='{"name":"'+element+'","count":'+str(count)+',"year":'+YEAR+',"type":"'+TYPE+'"}';
            # fileWrite.write(json);
            # fileWrite.write('\n');
            # fileWrite.write(',')
            # fileWrite.write('\n');
            # fileWrite.write('{"name":"'+element+'","count":'+str(count)+',"year":'+YEAR+',"type":"'+TYPE+'"},'+'\n');
            
            jsonstring={'name':element,'count':str(count),'year':YEAR,'type':TYPE}
            data.append(jsonstring)
            #json.dump(data,fileWrite);
            #json.dump(jsonstring,fileWrite);
            e = element
        s=myoldrussianarray
        #print s.count(s[0])
        json.dump(data,fileWrite,ensure_ascii=False);
        #fileWrite(json.dumps(data,ensure_ascii=False))
    fileWrite.close()
    print 'данные успешно загружены в БД'
    # with open('data.json','w') as outfile:
    #     json.dump(data,outfile)
except Exception as ex:
    print('error in writefile',ex)
    
