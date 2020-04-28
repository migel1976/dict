#! /usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import json
import io

def clean(text):
    if not isinstance(text,str):
        raise TypeError('text must be str')

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
    arraySentence=[];
    myoldrussianarray=[]
    with open(FILENAME,'r') as fileRead1:
        arraySentence=fileRead1.readlines()
    fileRead1.close()
    # print('arraySentence',arraySentence)
    with open(FILENAME,'r') as fileRead:
        contents=fileRead.readlines()
        myarray=[]
        # myoldrussianarray=[]
        for content in contents:
            myarray=myarray+clean(content)
        myoldrussianarray=oldrussian(myarray)
    fileRead.close()
    # print('contents',contents)
except Exception as ex:
    print('error in readfile',ex)
try:
    data=[]
    jsonstring={'name':'','count':0,'year':YEAR,'type':TYPE,'sentence':''}
    with open('output.json','w') as fileWrite:
        s=myoldrussianarray
        e = ''
        findSentence=''
        for element in myoldrussianarray:
            if element == e: continue
            count=s.count(element)
            for sentence in arraySentence:
                if sentence.find(element)!=-1:
                    findSentence=sentence
                    # print('findSentence',findSentence);
                    try:
                        jsonstring={'name':element,'count':str(count),'year':YEAR,'type':TYPE,'sentence':findSentence}
                    except Exception as ex:
                        jsonstring={'name':'','count':0,'year':YEAR,'type':TYPE,'sentence':''}
            data.append(jsonstring)
            e = element
        s=myoldrussianarray
        json.dump(data,fileWrite,ensure_ascii=False);
    fileWrite.close()
    print 'данные успешно загружены в БД'
except Exception as ex:
    print('error in writefile',ex)

