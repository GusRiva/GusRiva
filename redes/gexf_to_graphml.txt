import networkx as nx
import pandas as pd

md = pd.read_csv("movies_metadata.tab", sep="\t")

for GexfID in md['GexfID']:
    G = nx.read_gexf('gexf/'+ str(GexfID) +'.gexf')
    new_G = nx.Graph()

    for node in G.nodes(data=True):
        id = node[0]
        lbl = node[1]['label']
        new_G.add_node(id, id= id, label=lbl)

    for edge in G.edges(data=True):
        new_G.add_edge(edge[0], edge[1], weight= edge[2]['weight'])

    nx.write_graphml(new_G, "graphml/"+ str(GexfID) +".graphml")