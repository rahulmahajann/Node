# 2020 A-a  (AC)

# for i in range(int(input())):
#     a,b=map(int,input().split())
#     c=sorted(list(map(int,input().split())))
#     d=0
#     count=0
#     for _ in c:
#         d+=_
#         if(d<=b):
#             count+=1
    
#     ans=[]
#     ans.append('Case #')
#     ans.append(str(i+1))
#     ans.append(': ')
#     ans.append(str(count))
#     print(''.join(ans))


# 2019 A-a  (WA)

# for i in range(int(input())):
#    a,b=map(int,input().split())
#    c=sorted(list(map(int,input().split())))

#    d=[0]

#    for _ in range(len(c)):
#       d.append(d[_]+c[_])
   
#    e=0
#    anss=10000000
#    for x in range(b-1,a):
#       e=d[x+1]-d[x-(b-1)]
#       t=c[x]*(b)-e
#       anss=min(anss,t)

#    ans=[]
#    ans.append('Case #')
#    ans.append(str(i+1))
#    ans.append(': ')
#    ans.append(str(anss))
#    print(''.join(ans))



# 2018 A-a  

digits = []
for _ in range(int(input())):
    digits.append(int(input()))

def getBeautifulNumber(i,num):
    slen = len(str(num))
    ans = getMandP(num)
    print("Case #"+str(i)+": "+str(min(map(lambda x: abs(int(x)-num),ans))))

def isBeautiful(num):
    return len([1 for n in num if int(n)%2!=0]) == 0
    

def getP(snum):
    i=0
    for n in snum:
        #Check for odd nums
        if(int(n)%2!=0):
            break
        i+=1

    p = str(int(snum[0:i]+snum[i])+1)+("0"*(len(snum)-i-1))
    if not isBeautiful(p):
        return getPfromN(p)
    else:
        return p

def getM(snum,i):
    return snum[0:i]+str(int(snum[i])-1)+("8"*(len(snum)-i-1))

def getMandP(num):
    i=0
    snum = str(num)
    for n in snum:
        #Check for odd nums
        if(int(n)%2!=0):
            break
        i+=1
    
    #Already beautiful
    if(i==len(snum)):
        return [num,num]
    else:
        m = getM(snum,i)
        n = getP(snum)
        return [m,n]


for i,n in enumerate(digits):
    getBeautifulNumber(i+1,n)