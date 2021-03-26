#include<bits/stdc++.h>
using namespace std;

int main(){
    int t;
    cin>>t;
    
    for(int z=1;z<=t;++z){
        
        
        int n,c;
        cin>>n>>c;
        
        vector<int>v;
        int b=0;
        for(int i=1;i<=n;++i){
            v.push_back(i);
        }
        
        do{
            long long ans=0;
            long long arr[n];
            for(int i=0;i<n;++i){
                arr[i]=v[i];
            }
        for(int i=0;i<n-1;++i){
            long long temp=arr[i];
            int ind=i;
            for(int j=i+1;j<n;++j){
                if(arr[j]<temp){
                    temp=arr[j];
                    ind=j;
                }
            }
            if(ind==i){
                ans+=1;
            }else{
                ind+=1;
                reverse(arr+i,arr+ind);
                ans+=(ind-i);
            }
        }
        
        if(ans==c){
            b=1;
            break;
        }
        }while(next_permutation(v.begin(),v.end()));
         
         if(b==0){
            cout<<"Case #"<<z<<": ";
            cout<<"IMPOSSIBLE"<<endl;
        }else{
            cout<<"Case #"<<z<<": ";
            for(auto x:v)cout<<x<<" ";
            cout<<endl;
         }
    }
}