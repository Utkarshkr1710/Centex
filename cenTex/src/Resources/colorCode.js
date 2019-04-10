
    export function colors() {
        let categoryColor = null;

        const { dataReducer } = this.props.state;
        
        if(dataReducer.data){
              const catNum = dataReducer.data[0].Category.Number;
        
              if(catNum === 1)
                categoryColor = '#28b463';
              else if(catNum === 2)
                      categoryColor = 'gold';
                   else if(catNum === 3)
                          categoryColor = 'orange';
                        else if(catNum === 4)
                                categoryColor = 'gold';
                                else if(catNum === 5)
                                        categoryColor = '800080';
                                      else if(catNum === 6)
                                              categoryColor = '800000';
                                            else if(catNum === 7)
                                                    categoryColor = '#800000';
                              
        
            }
    
            return categoryColor;
    }