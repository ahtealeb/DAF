async function main() {
  let userQuery = document.getElementById("userQuery").value;
  let sed =  document.getElementById("queryButton");
  if (userQuery === "") {
    alert("Please Enter Query");
  } else {
    await insertQuery(userQuery);
    await runRulesQUery(userQuery);
    setTimeout(async function () {
      await findTechnique(userQuery);
    }, 500);
  }
  if (sed.style.display === "none") {
    sed.style.display = "block";
  } else {
    sed.style.display = "none";
  }

}
async function insertQuery(userQuery) {
  data =
    "update=" +
    `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX daf: <http://www.semanticweb.org/moi/ontologies/2021/4/DAF#>
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the new individual for data
        ?iri rdf:type daf:Data.
        ?iri daf:userQuery "${userQuery}"
    }
    WHERE {
       bind(IRI(concat("http://www.semanticweb.org/moi/ontologies/2021/4/DAF#", struuid())) as ?iri)
    }`;
  // console.log(data);
  var url = "http://localhost:3030/Analytics/update";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, data, false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
    }
  };
  xhr.send(data);
}
async function runRulesQUery(userQuery) {
  data =
    "update=" +
    `# Prefixes define which are going to use in the sparql query
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX daf: <http://www.semanticweb.org/moi/ontologies/2021/4/DAF#>
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?sentimentAnalysis.
    }
    WHERE {
        # Set the analytics value with sentiment individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:Classification_136b6786_0ec0_4af7_bd7c_22891961f6ec as ?sentimentAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "feedbacks") || contains(lcase(str(?userQuery)), "opinions") || contains(lcase(str(?userQuery)), "impacts"))
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?customerChurnAnalysis.
    }
    WHERE {
        # Set the analytics value with customer churn individual iri
        bind("${userQuery}" as ?userQuery)       
        bind(daf:Classification_3f9b7b45_8e69_47b8_90f9_c8c1936f2e15 as ?customerChurnAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "classify"))
    filter (contains(lcase(str(?userQuery)), "churn"))
    filter (!contains(lcase(str(?userQuery)), "stop"))
    filter (!contains(lcase(str(?userQuery)), "doing"))
    filter (!contains(lcase(str(?userQuery)), "end a relationship"))
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?customerChurnAnalysis.
    }
    WHERE {
        # Set the analytics value with customer Churn individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:Classification_3f9b7b45_8e69_47b8_90f9_c8c1936f2e15 as ?customerChurnAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "predict"))
    filter (contains(lcase(str(?userQuery)), "churn"))
    
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?customerChurnAnalysis.
    }
    WHERE {
        # Set the analytics value with customer churn individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:Classification_3f9b7b45_8e69_47b8_90f9_c8c1936f2e15 as ?customerChurnAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "predict") )
    filter (contains(lcase(str(?userQuery)), "stop"))
    filter (contains(lcase(str(?userQuery)), "doing"))
    
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?customerChurnAnalysis.
    }
    WHERE {
        # Set the analytics value with customer churn individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:Classification_3f9b7b45_8e69_47b8_90f9_c8c1936f2e15 as ?customerChurnAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "classify"))
    filter (contains(lcase(str(?userQuery)), "stop"))
    filter (contains(lcase(str(?userQuery)), "doing"))
    filter (!contains(lcase(str(?userQuery)), "churn"))
    filter (!contains(lcase(str(?userQuery)), "end a relationship"))
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?customerChurnAnalysis.
    }
    WHERE {
        # Set the analytics value with customer churn individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:Classification_3f9b7b45_8e69_47b8_90f9_c8c1936f2e15 as ?customerChurnAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "predict"))
    filter (contains(lcase(str(?userQuery)), "end a relationship"))
    
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?customerChurnAnalysis.
    }
    WHERE {
        # Set the analytics value with customer churn individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:Classification_3f9b7b45_8e69_47b8_90f9_c8c1936f2e15 as ?customerChurnAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "classify"))
    filter (contains(lcase(str(?userQuery)), "end a relationship"))
    filter (!contains(lcase(str(?userQuery)), "stop"))
    filter (!contains(lcase(str(?userQuery)), "doing"))
    filter (!contains(lcase(str(?userQuery)), "churn"))
    
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?predictPriceAnalysis.
    }
    WHERE {
        # Set the analytics value with predict price individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:RegressionTechnique_2a5b82ca_04c5_4e99_8bfe_5b611b364480 as ?predictPriceAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "predict"))
    filter (contains(lcase(str(?userQuery)), "price"))
    
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?predictPriceAnalysis.
    }
    WHERE {
        # Set the analytics value with predict price individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:RegressionTechnique_2a5b82ca_04c5_4e99_8bfe_5b611b364480 as ?predictPriceAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "determine"))
    filter (contains(lcase(str(?userQuery)), "price"))
    
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?customerSegmentationAnalysis.
    }
    WHERE {
        # Set the analytics value with customer segmentation individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:ClusteringTechnique_347d0b3a_1456_4748_a923_d067ac9463d7 as ?customerSegmentationAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
        filter (!contains(lcase(str(?userQuery)), "end a relationship"))
        filter (!contains(lcase(str(?userQuery)), "stop"))
        filter (!contains(lcase(str(?userQuery)), "doing"))
        filter (!contains(lcase(str(?userQuery)), "churn"))
    filter (contains(lcase(str(?userQuery)), "categorize") || contains(lcase(str(?userQuery)), "classify"))
    };
    # Insert those statement which are in insert clause where it fulfils where condition
    INSERT
    {
        # Insert the analytics value in the individual
        ?iri daf:hasAnalytics ?marketBasketAnalysis.
    }
    WHERE {
        # Set the analytics value with market basket analysis individual iri
        bind("${userQuery}" as ?userQuery)
        bind(daf:AssociationTechnique_f67f567e_1262_455d_8980_c6f254d9f1d7 as ?marketBasketAnalysis)
        # Get all data type individual
        ?iri rdf:type daf:Data.
        # Get all data type individual keyword
        ?iri daf:userQuery ?userQuery 
        # filter only those where keyword match to impact
    filter (contains(lcase(str(?userQuery)), "suggest") || contains(lcase(str(?userQuery)), "recommend") || contains(lcase(str(?userQuery)), "identify"))
    }`;
  //console.log(data);
  var url = "http://localhost:3030/Analytics/update";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, data, false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
    }
  };
  xhr.send(data);
}
async function findTechnique(userQuery) {
  var x = document.getElementById("analytic").value;
  data =
    "query=" +
    `#Adding prefixes in the start on query which are used in the query
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX daf: <http://www.semanticweb.org/moi/ontologies/2021/4/DAF#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    # Pass the variable name after select which want to show in the result
    Select distinct ?userQuery ?Technique ?analyticsName where {
        # It gets all those individuals whose type is daf:Data class.
      bind("${userQuery}" as ?userQuery)
        ?iri rdf:type daf:Data.
       ?iri daf:userQuery ?userQuery. 
      optional { ?iri daf:hasAnalytics ?analytics.
           ?analytics rdf:type ?ModelClassifier.
          ?analytics daf:name ?analyticsName.
        bind(strafter(str(?ModelClassifier), "#") as ?Technique)}
      filter(bound(?userQuery) || bound(?analytics))
      filter(?ModelClassifier!=owl:NamedIndividual)
      # pass the iri of individual of that class analytics 
     #   filter(?analytics=daf:Classification_3f9b7b45_8e69_47b8_90f9_c8c1936f2e15)
    }`;
  var url = "http://localhost:3030/Analytics/query";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, data, false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  console.log(xhr.responseText);
  xhr.onreadystatechange = function () {
    let techiques = "";
    if (xhr.readyState === 4) {
      let resultData = JSON.parse(xhr.responseText).results.bindings;
      for (let i = 0; i < resultData.length; i++) {
        techiques +=
          "Technique: " +
          resultData[i].Technique.value +
          "<br>" +
          "Analytics: " +
          resultData[i].analyticsName.value +
          "<br>";
        console.log(
          resultData[i].analyticsName.value,
          resultData[i].Technique.value
        );
      }
      var x = document.getElementById("analytic");
      x.style.fontWeight = "bold";
      x.innerHTML = techiques;
      console.log(techiques);
    }
  };
  xhr.send(data);
}


